import React from "react";
import prisma from "@/lib/prisma";
import { ProductCard } from "@/components/common/product-card";

export default async function DealsPage() {
  // Fetch all deals and their associated products
  const deals = await prisma.deal.findMany({
    orderBy: { startsAt: "desc" },
    include: {
      products: true,
    },
  });

  return (
    <main className="mx-auto max-w-5xl px-4">
      <h1 className="mb-6 text-3xl font-bold">Oferte</h1>
      {deals.length === 0 ? (
        <div className="text-muted-foreground text-lg">Nu există oferte disponibile în acest moment.</div>
      ) : (
        <div className="space-y-12">
          {deals.map((deal) => (
            <section key={deal.id}>
              <h2 className="mb-2 text-2xl font-semibold">{deal.label}</h2>
              {deal.description && <p className="text-muted-foreground mb-4">{deal.description}</p>}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {deal.products.length === 0 ? (
                  <div className="text-muted-foreground col-span-full">Nu există produse pentru această ofertă.</div>
                ) : (
                  deal.products.map((product) => <ProductCard key={product.id} {...product} isDeal />)
                )}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}
