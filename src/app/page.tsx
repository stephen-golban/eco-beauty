import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { CategoryCard, ProductCard } from "@/components/common";
import { auth } from "@clerk/nextjs/server";
import { CustomRedirect } from "@/components/custom-redirect";
export default async function Home() {
  const { userId } = await auth();
  const products = await prisma.product.findMany({
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });

  // Get the first product from bags category
  const bagProduct = await prisma.product.findFirst({
    where: {
      categoryId: {
        equals: (
          await prisma.category.findUnique({
            where: { slug: "bags" },
          })
        )?.id,
      },
    },
    orderBy: {
      // Get a random product by using a random function
      createdAt: Math.random() > 0.5 ? "asc" : "desc",
    },
    take: 1,
  });

  // Get the first product from shoes category
  const shoeProduct = await prisma.product.findFirst({
    where: {
      categoryId: {
        equals: (
          await prisma.category.findUnique({
            where: { slug: "shoes" },
          })
        )?.id,
      },
    },
  });

  const categories = await prisma.category.findMany({
    where: {
      slug: {
        in: ["skincare", "makeup"],
      },
    },
  });

  if (userId) {
    return <CustomRedirect redirectTo="/app" />;
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background relative flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Soft pastel radial background accent */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <div
            className="h-[600px] w-[600px] rounded-full bg-pink-200 opacity-80 blur-3xl dark:bg-purple-900 dark:opacity-40"
            style={{ filter: "blur(80px)" }}
          />
        </div>
        <div className="z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold tracking-tight md:text-7xl">
            Elevate Your Natural Beauty
          </h1>
          <p className="text-foreground/80 mt-4 max-w-xl text-lg md:text-xl">
            Clean, conscious, and luxurious beauty essentials for radiant skin and a better planet.
          </p>
          <Link href="/products">
            <Button size="lg" className="mt-8">
              Shop now
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Obsessive Attention. Intelligent Effort.</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Functional handbags made of luxurious materials to improve people&apos;s lives in small but mighty ways.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} isSmall />
          ))}
        </div>
      </section>

      {/* Category Showcase Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {bagProduct && <ProductCard {...bagProduct} isBackInStock />}
          {shoeProduct && <ProductCard {...shoeProduct} isBackInStock />}
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl p-5">
        {/* Mission Statement */}
        <section className="mx-auto w-full px-4 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Obsessive Care. Sustainable Impact.</h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            Carefully crafted beauty products made from natural ingredients to enhance your beauty routine while
            preserving our planet.
          </p>
        </section>

        {/* Product Categories Preview */}
        <section className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </section>
      </div>
    </div>
  );
}
