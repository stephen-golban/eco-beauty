import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClerkAPIError } from "@clerk/types";
import { toast } from "sonner";
import { Product } from "@/generated/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayErrors(errors: ClerkAPIError[]) {
  return errors.forEach((error) => {
    if (error.code === "strategy_for_user_invalid") {
      toast.error("You did not register a password for this account.");
    } else {
      toast.error(error.longMessage);
    }
  });
}

export const makeSafeProduct = (product: Product | null) => {
  if (!product) return null;

  return {
    ...product,
    price: product.price.toString(),
    rating: product.rating ? product.rating.toString() : null,
  };
};

export const makeSafeProducts = (products: Product[]) => {
  return products.map(makeSafeProduct);
};
