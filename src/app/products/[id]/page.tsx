import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ProductImageGallery from "./ProductImageGallery";
import { Badge } from "@/components/ui/badge";
import AddToCartForm from "./AddToCartForm";
import { Product } from "@/generated/prisma";
import AddToWishlistButton from "./AddToWishlistButton";
import { auth } from "@clerk/nextjs/server";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) return notFound();

  // Get current user and wishlist
  const { userId } = await auth();
  let inWishlist = false;
  if (userId) {
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { wishlist: { select: { id: true } } },
    });
    inWishlist = !!user?.wishlist.some((p) => p.id === id);
  }

  // Convert Decimal fields to string for display
  const price = product.price.toString();
  const rating = product.rating ? product.rating.toString() : null;

  const safeProduct = {
    ...product,
    price: product.price.toString(),
    rating: product.rating ? product.rating.toString() : null,
  };

  return (
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Images */}
        <div className="flex-1">
          <ProductImageGallery images={product.images} name={product.name} />
        </div>
        {/* Details */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground text-lg">{Number(price).toFixed(2)} MDL</p>
          {product.stock === 0 ? (
            <span className="font-semibold text-red-500">Stoc epuizat</span>
          ) : (
            <span className="font-semibold text-green-600">În stoc: {product.stock}</span>
          )}
          {product.isDeal && product.dealLabel && <Badge className="ml-4">{product.dealLabel}</Badge>}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Descriere</h2>
            <p>{product.description}</p>
          </div>
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Ingrediente</h2>
              <ul className="list-inside list-disc text-sm text-gray-700 dark:text-gray-200">
                {product.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          )}
          {product.benefits && product.benefits.length > 0 && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Beneficii</h2>
              <ul className="list-inside list-disc text-sm text-gray-700 dark:text-gray-200">
                {product.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          )}
          {product.howToUse && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Mod de utilizare</h2>
              <p>{product.howToUse}</p>
            </div>
          )}
          <div className="mt-4 flex gap-4">
            {product.isOrganic && (
              <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">
                Organic
              </span>
            )}
            {product.isVegan && (
              <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">
                Vegan
              </span>
            )}
            {product.isCrueltyFree && (
              <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800 dark:bg-green-900 dark:text-green-200">
                Fără cruzime
              </span>
            )}
            {product.gender && (
              <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {product.gender}
              </span>
            )}
          </div>
          {rating && <div className="mt-2 text-sm text-yellow-600 dark:text-yellow-300">Rating: {rating} / 5</div>}

          {/* Add to Cart UI */}
          {userId && <AddToWishlistButton productId={product.id} inWishlist={inWishlist} />}
          <AddToCartForm product={safeProduct as unknown as Product} />
        </div>
      </div>
    </div>
  );
}
