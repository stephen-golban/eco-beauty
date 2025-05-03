import { Category } from "@/generated/prisma";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import React from "react";

interface ProductFiltersProps {
  categories: Category[];
  selectedCategory: string | null;
  onCategoryChange: (catId: string | null) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  attributes: { isOrganic: boolean; isVegan: boolean; isCrueltyFree: boolean };
  onAttributeChange: (attr: keyof ProductFiltersProps["attributes"]) => void;
}

export function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  minPrice,
  maxPrice,
  attributes,
  onAttributeChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-lg font-semibold">Category</h3>
        <ul className="space-y-2">
          <li>
            <Button
              variant={!selectedCategory ? "secondary" : "ghost"}
              size="sm"
              className="w-full justify-start"
              onClick={() => onCategoryChange(null)}
            >
              All
            </Button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <Button
                variant={selectedCategory === cat.id ? "secondary" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => onCategoryChange(cat.id)}
              >
                {cat.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">Price</h3>
        <Slider min={minPrice} max={maxPrice} value={priceRange} onValueChange={onPriceChange} />
        <div className="mt-1 flex justify-between text-xs">
          <span>MDL {priceRange[0]}</span>
          <span>MDL {priceRange[1]}</span>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold">Attributes</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <Checkbox checked={attributes.isOrganic} onCheckedChange={() => onAttributeChange("isOrganic")} />
            Organic
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked={attributes.isVegan} onCheckedChange={() => onAttributeChange("isVegan")} />
            Vegan
          </label>
          <label className="flex items-center gap-2">
            <Checkbox checked={attributes.isCrueltyFree} onCheckedChange={() => onAttributeChange("isCrueltyFree")} />
            Cruelty-Free
          </label>
        </div>
      </div>
    </div>
  );
}
