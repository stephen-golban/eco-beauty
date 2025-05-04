"use server";

import prisma from "@/lib/prisma";

type UserData = {
  clerkId: string;
  name: string;
  email: string;
};

export async function createUser(data: UserData) {
  return await prisma.user.create({
    data,
  });
}
