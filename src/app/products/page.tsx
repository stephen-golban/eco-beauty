"use client";
import { useSearchParams } from "next/navigation";
import ProductsClient from "./ProductsClient";
import { Category, Product } from "@/generated/prisma";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPageWrapper() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const { data: products, isLoading: loadingProducts } = useSWR<Product[]>("/api/products", fetcher);
  const { data: categories, isLoading: loadingCategories } = useSWR<Category[]>("/api/categories", fetcher);
  const { data: wishlistIds, isLoading: loadingWishlist } = useSWR<string[]>("/api/wishlist", fetcher);
  const loading = loadingProducts || loadingCategories || loadingWishlist;
  if (loading || !products || !categories || !wishlistIds) {
    return <div className="p-8 text-center">Loading...</div>;
  }
  // Data fetching must be moved to a client-friendly method (e.g., SWR, React Query, or API route)
  // For now, just render ProductsClient with the search param
  // TODO: Move data fetching to client or use a hybrid approach
  return (
    <ProductsClient
      initialSearchTerm={search}
      initialProducts={products}
      categories={categories}
      wishlistIds={wishlistIds}
    />
  );
}
