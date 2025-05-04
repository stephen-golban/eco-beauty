"use client";

import { Product } from "@/generated/prisma";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import AddToWishlistButton from "@/app/products/[id]/AddToWishlistButton";

interface ProductCardProps extends Product {
  isSmall?: boolean;
  isBackInStock?: boolean;
  showMiniLike?: boolean;
  inWishlist?: boolean;
}

export function ProductCard({
  name,
  price,
  images,
  stock,
  id,
  isSmall,
  inWishlist,
  isDeal,
  isBackInStock,
  showMiniLike,
}: ProductCardProps) {
  const { isSignedIn, isLoaded } = useUser();

  const renderBadge = React.useMemo(() => {
    if (isBackInStock) {
      return (
        <Badge className="absolute top-2 left-2 z-10" variant="default">
          Revenit în stoc
        </Badge>
      );
    }
    if (isDeal) {
      return (
        <Badge className="absolute top-2 left-2 z-10" variant="secondary">
          Ofertă
        </Badge>
      );
    }
    if (stock === 0) {
      return (
        <Badge className="absolute top-2 left-2 z-10" variant="destructive">
          Stoc epuizat
        </Badge>
      );
    }
    return null;
  }, [isBackInStock, isDeal, stock]);

  return (
    <div className="group space-y-6">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        {renderBadge}
        {showMiniLike && isLoaded && isSignedIn && (
          <div className="absolute top-2 right-2 z-10">
            <AddToWishlistButton productId={id} inWishlist={inWishlist || false} iconMode />
          </div>
        )}
        <Link href={`/products/${id}`}>
          <Image
            src={images[0]}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-200 group-hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <Link
          href={`/products/${id}`}
          className={cn("group inline-flex items-center font-medium", isSmall && "text-sm")}
        >
          {name}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="md:text-right">
          <p className={cn("text-muted-foreground mt-1 text-sm", isSmall && "text-xs")}>
            {Number(price).toFixed(0)} MDL
          </p>
        </div>
      </div>
    </div>
  );
}
