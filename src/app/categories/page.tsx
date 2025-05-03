import { CategoryCard } from "@/components/common/category-card";
import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto min-w-screen space-y-12 px-4">
      <div className="space-y-4 text-center">
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">Shop by Category</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          Discover our curated selection of beauty, skincare, and lifestyle categories.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`} className="block w-full">
            <div className="aspect-[5/4] w-full">
              <CategoryCard category={category} freeForm={true} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
