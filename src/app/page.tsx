import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { CategoryCard, ProductCard } from "@/components/common";
import { auth } from "@clerk/nextjs/server";
import { CustomRedirect } from "@/components/custom-redirect";
import { makeSafeProduct, makeSafeProducts } from "@/lib/utils";
import { Product } from "@/generated/prisma";
export default async function Home() {
  const { userId } = await auth();
  const products = await prisma.product.findMany({
    take: 8,
    orderBy: {
      createdAt: "desc",
    },
  });
  const safeProducts = makeSafeProducts(products);

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

  const safeBagProduct = makeSafeProduct(bagProduct);
  const safeShoeProduct = makeSafeProduct(shoeProduct);

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
            className="h-72 w-72 rounded-full bg-pink-200 opacity-80 blur-3xl md:h-[600px] md:w-[600px] dark:bg-purple-900 dark:opacity-40"
            style={{ filter: "blur(80px)" }}
          />
        </div>
        <div className="z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold tracking-tight md:text-7xl">
            Evidențiază-ți frumusețea naturală
          </h1>
          <p className="text-foreground/80 mt-4 max-w-xl text-lg md:text-xl">
            Esențiale de frumusețe curate, conștiente și luxoase pentru o piele radiantă și o planetă mai bună.
          </p>
          <Link href="/products">
            <Button size="lg" className="mt-8">
              Cumpără acum
            </Button>
          </Link>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight">Atenție obsesivă. Efort inteligent.</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Genți funcționale realizate din materiale luxoase pentru a îmbunătăți viața oamenilor în moduri mici, dar
            puternice.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {safeProducts?.map((product) => (
            <ProductCard key={product?.id} {...(product as unknown as Product)} isSmall />
          ))}
        </div>
      </section>

      {/* Category Showcase Section */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {safeBagProduct && <ProductCard {...(safeBagProduct as unknown as Product)} isBackInStock />}
          {safeShoeProduct && <ProductCard {...(safeShoeProduct as unknown as Product)} isBackInStock />}
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl p-5">
        {/* Mission Statement */}
        <section className="mx-auto w-full px-4 py-24 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Îngrijire obsesivă. Impact sustenabil.</h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            Produse de frumusețe realizate cu grijă din ingrediente naturale pentru a-ți îmbunătăți rutina de frumusețe
            și a proteja planeta.
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
