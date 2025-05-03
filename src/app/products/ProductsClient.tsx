"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/common/product-card";
import { Category, Product } from "@/generated/prisma";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ProductFilters } from "./ProductFilters";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

const PAGE_SIZE = 9;

export default function ProductsClient({
  categories,
  initialProducts,
}: {
  categories: Category[];
  initialProducts: Product[];
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>(() => {
    const prices = initialProducts.map((p) => Number(p.price));
    return [Math.min(...prices, 0), Math.max(...prices, 1000)];
  });
  const [attributes, setAttributes] = useState({ isOrganic: false, isVegan: false, isCrueltyFree: false });
  const [page, setPage] = useState(1);

  // Filtering and sorting logic
  const filteredSortedProducts = useMemo(() => {
    let products = initialProducts;
    // Category filter
    if (selectedCategory) {
      products = products.filter((p) => p.categoryId === selectedCategory);
    }
    // Price filter
    products = products.filter((p) => {
      const price = Number(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });
    // Attribute filters
    if (attributes.isOrganic) products = products.filter((p) => p.isOrganic);
    if (attributes.isVegan) products = products.filter((p) => p.isVegan);
    if (attributes.isCrueltyFree) products = products.filter((p) => p.isCrueltyFree);
    // Sorting
    products = [...products];
    switch (sort) {
      case "price-asc":
        products.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price-desc":
        products.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case "rating":
        products.sort((a, b) => Number(b.rating ?? 0) - Number(a.rating ?? 0));
        break;
      case "newest":
      default:
        products.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }
    return products;
  }, [initialProducts, selectedCategory, priceRange, attributes, sort]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredSortedProducts.length / PAGE_SIZE));
  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredSortedProducts.slice(start, start + PAGE_SIZE);
  }, [filteredSortedProducts, page]);

  // Handlers
  const handleAttributeChange = (attr: keyof typeof attributes) =>
    setAttributes((prev) => ({ ...prev, [attr]: !prev[attr] }));
  const handleCategoryChange = (catId: string | null) => {
    setSelectedCategory(catId);
    setPage(1);
  };
  const handleSortChange = (value: string) => setSort(value);
  const handlePriceChange = (range: [number, number]) => setPriceRange(range);

  return (
    <div className="mx-auto flex w-full max-w-7xl gap-8 px-4">
      {/* Sidebar Filters */}
      <aside className="hidden w-64 flex-shrink-0 lg:block">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          priceRange={priceRange}
          onPriceChange={handlePriceChange}
          minPrice={Math.min(...initialProducts.map((p) => Number(p.price)), 0)}
          maxPrice={Math.max(...initialProducts.map((p) => Number(p.price)), 1000)}
          attributes={attributes}
          onAttributeChange={handleAttributeChange}
        />
      </aside>
      {/* Main Content */}
      <main className="flex-1 space-y-8">
        {/* Mobile Filters Button & Drawer */}
        <div className="mb-4 lg:hidden">
          <Drawer direction="bottom">
            <DrawerTrigger asChild>
              <Button variant="outline" className="w-full">
                Filters
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerTitle>
                <VisuallyHidden>Filters</VisuallyHidden>
              </DrawerTitle>
              <div className="max-h-[80vh] overflow-y-auto p-4 pb-10">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-semibold">Filters</span>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close">
                      <span aria-hidden>×</span>
                    </Button>
                  </DrawerClose>
                </div>
                <ProductFilters
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={handleCategoryChange}
                  priceRange={priceRange}
                  onPriceChange={handlePriceChange}
                  minPrice={Math.min(...initialProducts.map((p) => Number(p.price)), 0)}
                  maxPrice={Math.max(...initialProducts.map((p) => Number(p.price)), 1000)}
                  attributes={attributes}
                  onAttributeChange={handleAttributeChange}
                />
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        {/* Top Bar: Sorting */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">All Products</h1>
          <Select value={sort} onValueChange={handleSortChange}>
            <SelectTrigger className="w-40 truncate overflow-hidden whitespace-nowrap">
              <SelectValue placeholder="Sort by" className="truncate overflow-hidden whitespace-nowrap" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Product Grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {paginatedProducts.length === 0 ? (
            <p className="text-muted-foreground col-span-full text-center">No products found.</p>
          ) : (
            paginatedProducts.map((product) => <ProductCard key={product.id} {...product} />)
          )}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={() => setPage((p) => Math.max(1, p - 1))} />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink isActive={page === i + 1} onClick={() => setPage(i + 1)}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext onClick={() => setPage((p) => Math.min(totalPages, p + 1))} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
    </div>
  );
}
