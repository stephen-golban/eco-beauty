import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import AddToWishlistButton from "@/app/products/[id]/AddToWishlistButton";
import { Product } from "@/generated/prisma";
import { Button } from "@/components/ui/button";

interface DashboardFavoritesTabProps {
  favorites: Product[];
}

export function DashboardFavoritesTab({ favorites }: DashboardFavoritesTabProps) {
  if (!favorites.length) {
    return (
      <div className="bg-background mx-auto mt-8 max-w-2xl rounded border p-8 text-center text-gray-400">
        Nu există produse favorite.
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Imagine</TableHead>
          <TableHead>Nume</TableHead>
          <TableHead>Preț</TableHead>
          <TableHead className="text-right">Acțiuni</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {favorites.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <Image
                src={product.images[0]}
                alt={product.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded object-cover"
              />
            </TableCell>
            <TableCell>
              <Link href={`/products/${product.id}`} className="font-medium hover:underline">
                {product.name}
              </Link>
            </TableCell>
            <TableCell>
              <span className="font-semibold text-pink-500">{Number(product.price).toFixed(2)} MDL</span>
            </TableCell>
            <TableCell className="flex items-center justify-end space-x-2 text-right">
              <Link href={`/products/${product.id}`} aria-label="Vezi produsul">
                <Button type="button" variant="outline" size="icon">
                  <Eye className="h-5 w-5" />
                </Button>
              </Link>
              <AddToWishlistButton productId={product.id} inWishlist={true} iconMode />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
