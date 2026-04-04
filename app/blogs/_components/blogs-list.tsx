"use client";

import Link from "next/link";
import { use } from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { ArrowUpRightIcon } from "lucide-react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import { getWixImageUrl } from "@/lib/wix";

// const categories = [
//   { name: "All", count: 128 },
//   { name: "Strategy", count: null },
//   { name: "Marketing", count: null },
//   { name: "GTM", count: null },
//   { name: "Creative", count: null },
//   { name: "PPC", count: null },
// ];

export default function BlogsList({
  posts,
  categories,
}: {
  posts: Promise<Post[]>;
  categories: Promise<Category[]>;
}) {
  const allPosts = use(posts);
  const allCategories = use(categories);
  // const [activeCategory, setActiveCategory] = useState("All");
  return (
    <ScrollThemeSection className="container">
      {/* Tabs / Filter */}
      {/* <div className="flex flex-wrap gap-4 items-center">
        {allCategories.map((cat) => (
          <button
            key={cat.label}
            type="button"
            onClick={() => setActiveCategory(cat.label)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
              activeCategory === cat.label
                ? "bg-primary border-primary text-white"
                : "bg-transparent border-muted/40 text-muted/60"
            }`}
          >
            {cat.label} {cat.postCount ? `(${cat.postCount})` : ""}
          </button>
        ))}
      </div> */}

      <div className="grid lg:grid-cols-3 gap-x-8 gap-y-14">
        {allPosts.slice(3).map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.slug}>
            <div className="space-y-6 group cursor-pointer">
              <div className="relative max-w-[397px] w-full h-[270px] rounded-3xl overflow-hidden">
                <Image
                  src={getWixImageUrl(post.media?.wixMedia?.image) || ""}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="inline-block px-2 py-0.5 bg-primary/10 rounded-md">
                  <p className="text-xs font-bold text-primary tracking-wider uppercase">
                    {allCategories.find((cat) =>
                      post.categoryIds?.includes(cat._id as string),
                    )?.label || "Category"}
                  </p>
                </div>
                <h4 className="line-clamp-2 tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="leading-relaxed line-clamp-3">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {/* <div className="flex justify-center pt-8">
        <Button size="lg" className="h-14 px-8 text-lg rounded-2xl group">
          Load More
          <ArrowUpRightIcon className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </div> */}
    </ScrollThemeSection>
  );
}
