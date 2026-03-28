import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import BlogExampleImg from "@/public/blog-example.png";
import ScrollThemeSection from "@/components/scroll-theme-section";

const mockRelated = Array.from({ length: 3 }).map((_, i) => ({
  id: `related-${i}`,
  category: "Category Tag",
  title: "A quick brown fox jumps over the lazy dog",
  description:
    "There's this belief that only deep pockets and massive budgets can cut through the noise in saturated markets. But here's the kicker, strategy..",
  image: BlogExampleImg,
}));

export default function RelatedBlogs() {
  return (
    <ScrollThemeSection className="container space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="relative inline-block">Related Blogs</h2>
        <Button size="lg" className="rounded-xl group h-12">
          Load More
          <ArrowUpRightIcon className="ml-2 size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockRelated.map((post) => (
          <Link
            href={`/blogs/${post.id}`}
            key={post.id}
            className="space-y-6 group cursor-pointer"
          >
            <div className="relative w-full h-[270px] overflow-hidden rounded-[28px]">
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
    </ScrollThemeSection>
  );
}
