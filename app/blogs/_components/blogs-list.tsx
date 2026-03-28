"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

import BlogExampleImg from "@/public/blog-example.png";
import ScrollThemeSection from "@/components/scroll-theme-section";

const categories = [
  { name: "All", count: 128 },
  { name: "Strategy", count: null },
  { name: "Marketing", count: null },
  { name: "GTM", count: null },
  { name: "Creative", count: null },
  { name: "PPC", count: null },
];

const mockPosts = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  category: "Category Tag",
  title: "A quick brown fox jumps over the lazy dog",
  description:
    "There's this belief that only deep pockets and massive budgets can cut through the noise in saturated markets. But here's the kicker, strategy..",
  image: BlogExampleImg,
}));

export default function BlogsList() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <ScrollThemeSection className="container space-y-12">
      {/* Tabs / Filter */}
      <div className="flex flex-wrap gap-4 items-center">
        {categories.map((cat) => (
          <button
            key={cat.name}
            type="button"
            onClick={() => setActiveCategory(cat.name)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
              activeCategory === cat.name
                ? "bg-primary border-primary text-white"
                : "bg-transparent border-muted/40 text-muted/60"
            }`}
          >
            {cat.name} {cat.count ? `(${cat.count})` : ""}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {mockPosts.map((post) => (
          <Link
            href={`/blogs/${post.id}`}
            key={post.id}
            className="space-y-6 group cursor-pointer"
          >
            <div className="relative w-full h-[270px] max-w-[397px] overflow-hidden rounded-[28px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed line-clamp-3">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center pt-8">
        <Button size="lg" className="h-14 px-8 text-lg rounded-2xl group">
          Load More
          <ArrowUpRightIcon className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </div>
    </ScrollThemeSection>
  );
}
