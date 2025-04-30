"use client";

import { useState } from "react";

import { Search, Star, StarOff, Eye } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardFooter, CardHeader, CardContent } from "@/components/ui/card";
import { Select, SelectItem, SelectValue, SelectContent, SelectTrigger } from "@/components/ui/select";

// Temporary mock data - replace with actual data fetching
const mockTemplates = [
  {
    id: 1,
    name: "Professional",
    description: "Clean and professional template perfect for corporate roles",
    category: "Corporate",
    isPremium: false,
    thumbnail: "/templates/professional.png",
    rating: 4.8,
    usageCount: 12500,
  },
  {
    id: 2,
    name: "Creative",
    description: "Stand out with this modern creative design",
    category: "Creative",
    isPremium: true,
    thumbnail: "/templates/creative.png",
    rating: 4.9,
    usageCount: 8300,
  },
  {
    id: 3,
    name: "Minimal",
    description: "Simple and elegant design that focuses on content",
    category: "Minimal",
    isPremium: false,
    thumbnail: "/templates/minimal.png",
    rating: 4.7,
    usageCount: 15200,
  },
  {
    id: 4,
    name: "Executive",
    description: "Premium template for senior positions and executives",
    category: "Corporate",
    isPremium: true,
    thumbnail: "/templates/executive.png",
    rating: 4.9,
    usageCount: 6400,
  },
  {
    id: 5,
    name: "Tech",
    description: "Modern template optimized for tech industry professionals",
    category: "Tech",
    isPremium: true,
    thumbnail: "/templates/tech.png",
    rating: 4.8,
    usageCount: 9800,
  },
  {
    id: 6,
    name: "Academic",
    description: "Structured template for academic and research positions",
    category: "Academic",
    isPremium: false,
    thumbnail: "/templates/academic.png",
    rating: 4.6,
    usageCount: 5200,
  },
];

const categories = ["All", "Corporate", "Creative", "Minimal", "Tech", "Academic"];

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  const filteredTemplates = mockTemplates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesPremium = !showPremiumOnly || template.isPremium;
    return matchesSearch && matchesCategory && matchesPremium;
  });

  return (
    <>
      {/* Header Section */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume Templates</h1>
          <p className="text-muted-foreground mt-2">Choose from our collection of professional templates</p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform" />
          <Input
            placeholder="Search templates..."
            className="h-11 pl-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="h-11 w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={() => setShowPremiumOnly(!showPremiumOnly)}
          className="h-11 w-full md:w-auto"
        >
          {showPremiumOnly ? <Star className="mr-2 h-5 w-5" /> : <StarOff className="mr-2 h-5 w-5" />}
          {showPremiumOnly ? "Show All" : "Premium Only"}
        </Button>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader className="relative p-0">
              <div className="bg-muted group relative aspect-[3/4]">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                </div>
              </div>
              {template.isPremium && (
                <Badge className="absolute top-2 right-2" variant="secondary">
                  Premium
                </Badge>
              )}
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="flex items-center justify-between">
                <span>{template.name}</span>
                <span className="text-muted-foreground text-sm">★ {template.rating}</span>
              </CardTitle>
              <p className="text-muted-foreground mt-1 text-sm">{template.description}</p>
              <p className="text-muted-foreground mt-2 text-sm">{template.usageCount.toLocaleString()} uses</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">Use Template</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="rounded-xl border py-16 text-center">
          <div className="mx-auto max-w-md space-y-4">
            <p className="text-muted-foreground text-lg">No templates found. Try adjusting your filters.</p>
          </div>
        </div>
      )}
    </>
  );
}
