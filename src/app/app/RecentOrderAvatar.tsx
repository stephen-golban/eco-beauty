"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export function RecentOrderAvatar({ image, product }: { image: string; product: string }) {
  return (
    <Avatar>
      <AvatarImage
        src={image}
        alt={product}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = "/images/products/placeholder.jpg";
        }}
      />
      <AvatarFallback>{product[0]}</AvatarFallback>
    </Avatar>
  );
}
