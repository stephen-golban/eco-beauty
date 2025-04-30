"use client";

import Link from "next/link";

import { Search, Star } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Template data - in a real app, this would come from an API or database
const templates = [
  {
    id: 1,
    name: "Professional Classic",
    description: "A timeless template suitable for traditional industries",
    image: "/templates/classic.png",
    category: "Professional",
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    name: "Modern Minimal",
    description: "Clean and contemporary design for creative professionals",
    image: "/templates/minimal.png",
    category: "Creative",
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 3,
    name: "Executive",
    description: "Sophisticated layout for senior-level positions",
    image: "/templates/executive.png",
    category: "Professional",
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: "Tech Innovator",
    description: "Modern template optimized for tech industry professionals",
    image: "/templates/tech.png",
    category: "Technology",
    rating: 4.7,
    reviews: 84,
  },
  {
    id: 5,
    name: "Creative Portfolio",
    description: "Showcase your creative work with style",
    image: "/templates/creative.png",
    category: "Creative",
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 6,
    name: "Startup Simple",
    description: "Clean and impactful design for startup environments",
    image: "/templates/startup.png",
    category: "Technology",
    rating: 4.6,
    reviews: 73,
  },
];

export default function TemplatesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 py-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Resume Templates</h1>
        <p className="text-muted-foreground max-w-3xl text-lg">
          Choose from our collection of professional resume templates. Each template is designed to pass ATS systems and
          impress hiring managers.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <Input placeholder="Search templates..." className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="professional">Professional</SelectItem>
            <SelectItem value="creative">Creative</SelectItem>
            <SelectItem value="technology">Technology</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="popular">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="group flex flex-col overflow-hidden">
            <CardHeader className="relative p-0">
              {/* Template Preview Image */}
              <div className="bg-secondary/20 relative aspect-[3/4]">
                {/* Replace with actual image */}
                <div className="text-muted-foreground absolute inset-0 flex items-center justify-center">
                  [Template Preview]
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-4">
              <CardTitle className="mb-2">{template.name}</CardTitle>
              <p className="text-muted-foreground mb-3 text-sm">{template.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{template.rating}</span>
                </div>
                <span className="text-muted-foreground">({template.reviews} reviews)</span>
              </div>
            </CardContent>
            <CardFooter className="mt-auto p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href="/auth/sign-up">Use Template</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
