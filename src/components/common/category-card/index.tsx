import Image from "next/image";

import { Button } from "@/components/ui/button";

import type { Category } from "@/generated/prisma";

export function CategoryCard({ category, freeForm = false }: { category: Category; freeForm?: boolean }) {
  return (
    <div className={`group relative overflow-hidden ${freeForm ? "h-full w-full" : "h-[600px]"}`}>
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h3 className="text-3xl font-bold">{category.name}</h3>
        <Button variant="secondary" className="mt-4">
          Explore Collection
        </Button>
      </div>
    </div>
  );
}
