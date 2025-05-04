import prisma from "@/lib/prisma";
import { format } from "date-fns";

export async function getDashboardData(clerkId: string) {
  // Get user with relations
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
  if (!user) throw new Error("User not found");

  // Loyalty points
  const loyaltyPoints = user.loyaltyPoints;

  // Orders count
  const ordersCount = user.orders.length;

  // Wishlist count
  const wishlistCount = user.wishlist.length;

  // Orders per month (for the current year)
  const now = new Date();
  const months = Array.from({ length: 12 }, (_, i) => format(new Date(now.getFullYear(), i, 1), "MMM"));
  const orderData = Array(12).fill(0);
  user.orders.forEach((order) => {
    const idx = new Date(order.placedAt).getMonth();
    orderData[idx]++;
  });

  // Recent orders (last 4)
  const recentOrders = user.orders.slice(0, 4).map((order) => {
    const firstItem = order.items[0];
    return {
      id: order.id,
      product: firstItem?.product?.name || "Unknown Product",
      image: firstItem?.product?.images?.[0] || "/images/products/placeholder.jpg",
      price: firstItem?.price || 0,
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
