"use client";

import { useCallback, useEffect, useState, use } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import Link from "next/link";
import { getWixImageUrl } from "@/lib/wix";

export default function BlogsHero({
  posts,
  categories,
}: {
  posts: Promise<Post[]>;
  categories: Promise<Category[]>;
}) {
  const allPosts = use(posts);
  const allCategories = use(categories);
  const featuredPosts = allPosts.slice(0, 3);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <ScrollThemeSection theme="dark" className="pt-32 pb-20 lg:pb-32">
      <div className="container space-y-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-medium">
          <Link
            href="/"
            className="text-white/60 hover:text-white transition-colors"
          >
            Home
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-primary">Blogs</span>
        </nav>

        {/* Carousel Viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {featuredPosts.map((post) => (
              <div key={post.slug} className="flex-[0_0_100%] min-w-0 pr-4">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="grid lg:grid-cols-2 gap-12 items-center group cursor-pointer"
                >
                  {/* Image Side */}
                  <div className="relative w-full h-[347px] max-w-[552px] overflow-hidden rounded-[40px]">
                    <Image
                      src={getWixImageUrl(post.media?.wixMedia?.image) || ""}
                      alt={post.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-primary font-semibold tracking-wide text-sm">
                        {post.author} •{" "}
                        {new Date(post.lastPublishedDate).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </p>
                      <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight line-clamp-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h1>
                      <p className="text-white/60 text-lg leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Category Tag */}
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">
                        {allCategories.find((cat) =>
                          post.categoryIds?.includes(cat._id as string),
                        )?.label || "Category"}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Pagination Dots - Pill Style */}
        <div className="flex justify-center gap-2 pt-8">
          {featuredPosts.map((post, i) => (
            <button
              type="button"
              key={post.slug}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`transition-all duration-300 rounded-full h-[4px] ${
                selectedIndex === i
                  ? "w-[17px] bg-primary"
                  : "w-[4px] bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </ScrollThemeSection>
  );
}
