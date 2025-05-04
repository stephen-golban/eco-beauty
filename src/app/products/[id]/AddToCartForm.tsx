"use client";

import { useRef, useState } from "react";
import { useCardStore } from "@/lib/card-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/generated/prisma";

export default function AddToCartForm({ product }: { product: Product }) {
  const addItem = useCardStore((s) => s.addItem);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <form
      className="mt-8 flex items-center gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleAdd();
      }}
    >
      <label htmlFor="quantity" className="text-sm font-medium">
        Cantitate
      </label>
      <Input
        id="quantity"
        name="quantity"
        type="number"
        min={1}
        max={product.stock}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        disabled={product.stock === 0}
        ref={inputRef}
        className="w-20"
      />
      <Button
        type="submit"
        className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 rounded-md px-6 py-2 text-sm font-medium shadow-xs transition-all disabled:pointer-events-none disabled:opacity-50"
        disabled={product.stock === 0}
      >
        {added ? "Adăugat!" : "Adaugă în coș"}
      </Button>
    </form>
  );
}
