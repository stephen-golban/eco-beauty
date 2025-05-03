import prisma from "@/lib/prisma";

import ProductsClient from "./ProductsClient";
import { Product } from "@/generated/prisma";

export default async function ProductsPage() {
  const categories = await prisma.category.findMany({ orderBy: { name: "asc" } });
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });

  // Convert Decimal fields to string for client component
  const safeProducts = products.map((p) => ({
    ...p,
    price: p.price.toString(),
    rating: p.rating ? p.rating.toString() : null,
  }));

  return <ProductsClient categories={categories} initialProducts={safeProducts as unknown as Product[]} />;
}
