"use client";

import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useCardStore } from "@/lib/card-store";
import React, { useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Cart button with badge, can be reused
export function CartButton({ count, ...props }: { count: number } & React.ComponentProps<typeof Button>) {
  return (
    <Button variant="ghost" size="icon" className="relative" {...props}>
      <ShoppingCart className="h-5 w-5" />
      {count > 0 && (
        <span className="bg-primary text-primary-foreground absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-medium">
          {count}
        </span>
      )}
    </Button>
  );
}

export function CardDrawer() {
  const items = useCardStore((s) => s.items);
  const clearCart = useCardStore((s) => s.clearCart);
  const total = items.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
  const { isSignedIn } = useUser();
  const router = useRouter();
  const drawerCloseRef = useRef<HTMLButtonElement>(null);

  const handleCheckout = () => {
    if (!isSignedIn) {
      drawerCloseRef.current?.click();
      router.push("/auth/sign-in");
      return;
    }
    return router.push("/checkout");
  };

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <CartButton count={items.length} aria-label="Open cart" />
      </DrawerTrigger>
      <DrawerContent className="flex h-full w-full max-w-sm flex-col p-0">
        <DrawerHeader>
          <DrawerTitle>Your Cart</DrawerTitle>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {items.length === 0 ? (
            <div className="text-muted-foreground py-12 text-center">Your cart is empty.</div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                    <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="truncate font-medium">{product.name}</div>
                    <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => {
                          if (quantity > 1) {
                            useCardStore.getState().updateQuantity(product.id, quantity - 1);
                          } else {
                            useCardStore.getState().removeItem(product.id);
                          }
                        }}
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="min-w-[24px] text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => useCardStore.getState().updateQuantity(product.id, quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="text-sm">MDL {Number(product.price) * quantity}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <DrawerFooter>
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>Total</span>
            <span>MDL {total}</span>
          </div>
          <Button disabled={items.length === 0} className="w-full" onClick={handleCheckout}>
            Checkout
          </Button>
          <Button variant="outline" onClick={clearCart} disabled={items.length === 0} className="w-full">
            Clear Cart
          </Button>
          <DrawerClose asChild>
            <Button variant="ghost" className="w-full" ref={drawerCloseRef}>
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
