import { Product } from "@/generated/prisma";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps extends Product {
  isSmall?: boolean;
  isBackInStock?: boolean;
}

export function ProductCard({ name, price, images, stock, id, isSmall, isDeal, isBackInStock }: ProductCardProps) {
  const renderBadge = React.useMemo(() => {
    if (isBackInStock) {
      return (
        <Badge className="absolute top-2 left-2 z-10" variant="default">
          Back in stock!
        </Badge>
      );
    }
    if (isDeal) {
      return (
        <Badge className="absolute top-2 left-2 z-10" variant="secondary">
          Deal
        </Badge>
      );
    }
    if (stock === 0) {
      return (
        <Badge className="absolute top-2 left-2 z-10" variant="destructive">
          Sold out
        </Badge>
      );
    }
    return null;
  }, [isBackInStock, isDeal, stock]);

  if (isSmall) {
    return (
      <Link href={`/products/${id}`} className="group">
        <div className="relative mb-4 aspect-square overflow-hidden bg-gray-100">
          {renderBadge}
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
        <div className="flex gap-2">
          <span>MDL {price.toString()}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/products/${id}`} className="space-y-6">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
        {renderBadge}
        <Image src={images[0]} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="group inline-flex items-center font-medium">
          {name}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
        <div className="md:text-right">
          <h3 className="hidden text-sm font-medium md:block">{name}</h3>
          <p className="text-muted-foreground mt-1 text-sm">MDL {price.toString()}</p>
        </div>
      </div>
    </Link>
  );
}
