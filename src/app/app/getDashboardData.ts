import prisma from "@/lib/prisma";
import { format } from "date-fns";

export async function getDashboardData(clerkId: string) {
  // Obține utilizatorul cu relații
  const user = await prisma.user.findUnique({
    where: { clerkId },
    include: {
      wishlist: true,
      orders: {
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
        orderBy: { placedAt: "desc" },
      },
    },
  });
  if (!user) throw new Error("Utilizatorul nu a fost găsit");

  // Puncte de loialitate
  const loyaltyPoints = user.loyaltyPoints;

  // Număr comenzi
  const ordersCount = user.orders.length;

  // Număr favorite
  const wishlistCount = user.wishlist.length;

  // Comenzi pe lună (pentru anul curent) - luni în română
  const now = new Date();
  const months = Array.from({ length: 12 }, (_, i) => {
    const name = new Intl.DateTimeFormat("ro-RO", { month: "short" }).format(new Date(now.getFullYear(), i, 1));
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
  const orderData = Array(12).fill(0);
  user.orders.forEach((order) => {
    const idx = new Date(order.placedAt).getMonth();
    orderData[idx]++;
  });

  // Comenzi recente (ultimele 4)
  const recentOrders = user.orders.slice(0, 4).map((order) => {
    const firstItem = order.items[0];
    return {
      id: order.id,
      product: firstItem?.product?.name || "Produs necunoscut",
      image: firstItem?.product?.images?.[0] || "/images/products/placeholder.jpg",
      price: Number(order.total),
      date: format(order.placedAt, "yyyy-MM-dd"),
    };
  });

  return {
    loyaltyPoints,
    ordersCount,
    wishlistCount,
    orderData,
    months,
    recentOrders,
    user,
  };
}
