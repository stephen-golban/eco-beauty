import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/common/product-card";

interface CategoryPageProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
    include: { products: true },
  });

  if (!category) {
    return notFound();
  }

  return (
    <div className="mx-auto min-w-full space-y-12 px-4">
      <div className="space-y-4 text-center">
        <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">{category.name}</h1>
      </div>
      <div className="mt-12 space-y-8">
        <h2 className="text-2xl font-semibold">Products in {category.name}</h2>
        {category.products.length === 0 ? (
          <p className="text-muted-foreground text-center">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
