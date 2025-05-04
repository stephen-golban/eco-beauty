"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { addToWishlistAction, removeFromWishlistAction } from "./actions";
import { HeartMinus, HeartPlus, Loader2 } from "lucide-react";

interface Props {
  productId: string;
  inWishlist: boolean;
  iconMode?: boolean;
}

export default function AddToWishlistButton({ productId, inWishlist, iconMode }: Props) {
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
          variant={iconMode ? "destructive" : "secondary"}
          size={iconMode ? "icon" : undefined}
          aria-label="Elimină din favorite"
          disabled={isPending}
          className={iconMode ? undefined : "flex items-center gap-2"}
        >
          {isPending ? (
            <Loader2 className={iconMode ? "h-5 w-5 animate-spin" : "mr-2 h-4 w-4 animate-spin"} />
          ) : (
            <HeartMinus className={iconMode ? "h-5 w-5" : "mr-2 h-4 w-4"} />
          )}
          {!iconMode && "Elimină din favorite"}
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
        variant={iconMode ? "secondary" : "outline"}
        size={iconMode ? "icon" : undefined}
        aria-label="Adaugă la favorite"
        disabled={isPending}
        className={iconMode ? undefined : "flex items-center gap-2"}
      >
        {isPending ? (
          <Loader2 className={iconMode ? "h-5 w-5 animate-spin" : "mr-2 h-4 w-4 animate-spin"} />
        ) : (
          <HeartPlus className={iconMode ? "h-5 w-5" : "mr-2 h-4 w-4"} />
        )}
        {!iconMode && "Adaugă la favorite"}
      </Button>
    </form>
  );
}
