import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  try {
    const { productId } = await req.json();
    if (!productId) {
      return NextResponse.json({ error: "Missing productId" }, { status: 400 });
    }
    // Find user
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // Update wishlist (connect product)
    await prisma.user.update({
      where: { id: user.id },
      data: {
        wishlist: {
          connect: { id: productId },
        },
      },
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : "Unknown error" }, { status: 500 });
  }
}
