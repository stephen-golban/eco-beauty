"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { addToWishlistAction, removeFromWishlistAction } from "./actions";
import { HeartMinus, HeartPlus, Loader2 } from "lucide-react";

interface Props {
  productId: string;
  inWishlist: boolean;
}

export default function AddToWishlistButton({ productId, inWishlist }: Props) {
  const [isPending, startTransition] = useTransition();

  if (inWishlist) {
    return (
      <form
        action={() => {
          startTransition(() => removeFromWishlistAction(productId));
        }}
      >
        <Button
          type="submit"
          variant="secondary"
          aria-label="Remove from wishlist"
          disabled={isPending}
          className="flex items-center gap-2"
        >
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <HeartMinus className="mr-2 h-4 w-4" />}
          Remove from Wishlist
        </Button>
      </form>
    );
  }

  return (
    <form
      action={() => {
        startTransition(() => addToWishlistAction(productId));
      }}
    >
      <Button
        type="submit"
        variant="outline"
        aria-label="Add to wishlist"
        disabled={isPending}
        className="flex items-center gap-2"
      >
        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <HeartPlus className="mr-2 h-4 w-4" />}
        Add to Wishlist
      </Button>
    </form>
  );
}
