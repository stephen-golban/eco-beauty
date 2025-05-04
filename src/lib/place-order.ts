"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

// Award 1 point per 10 MDL spent (customize as needed)
function calculateLoyaltyPoints(total: number) {
  return Math.floor(total / 10);
}

export async function placeOrderAction(
  cartItems: { productId: string; quantity: number; price: number; images?: string[] }[],
) {
  const { userId } = await auth();
  if (!userId) throw new Error("Not authenticated");
  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) throw new Error("User not found");

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const points = calculateLoyaltyPoints(total);

  // Create order and order items
  const order = await prisma.order.create({
    data: {
      userId: user.id,
      total,
      status: "completed",
      items: {
        create: await Promise.all(
          cartItems.map(async (item) => {
            let image = item.images?.[0];
            if (!image) {
              const product = await prisma.product.findUnique({ where: { id: item.productId } });
              image = product?.images?.[0] || "/images/products/placeholder.jpg";
            }
            return {
              productId: item.productId,
              quantity: item.quantity,
              price: item.price,
              image,
            };
          }),
        ),
      },
    },
    include: { items: true },
  });

  // Award loyalty points
  await prisma.user.update({
    where: { id: user.id },
    data: {
      loyaltyPoints: { increment: points },
    },
  });

  // Optionally, clear cart in client (handled client-side)

  // Revalidate dashboard and orders pages
  revalidatePath("/app");
  revalidatePath("/orders");
  return { orderId: order.id, pointsAwarded: points };
}
