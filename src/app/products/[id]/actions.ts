"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function addToWishlistAction(productId: string) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("You must be signed in to add to wishlist.");
  }
  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    throw new Error("User not found");
  }
  await prisma.user.update({
    where: { id: user.id },
    data: {
      wishlist: {
        connect: { id: productId },
      },
    },
  });
  revalidatePath("/products");
  revalidatePath(`/products/${productId}`);
}

export async function removeFromWishlistAction(productId: string) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("You must be signed in to remove from wishlist.");
  }
  const user = await prisma.user.findUnique({ where: { clerkId: userId } });
  if (!user) {
    throw new Error("User not found");
  }
  await prisma.user.update({
    where: { id: user.id },
    data: {
      wishlist: {
        disconnect: { id: productId },
      },
    },
  });
  revalidatePath("/products");
  revalidatePath(`/products/${productId}`);
}
