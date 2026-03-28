"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import Link from "next/link";
import BlogsHeroImg from "@/public/blogs-hero-img.png";

const posts = [
  {
    author: "Alec Whitten",
    date: "17 Jan 2026",
    title: "A Quick Brown Fox Jumps Over A Lazy Dog And Eats Him",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    tag: "Category Tag",
    image: BlogsHeroImg,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2026",
    title: "A Quick Brown Fox Jumps Over A Lazy Dog And Eats Him",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    tag: "Category Tag",
    image: BlogsHeroImg,
  },
  {
    author: "Alec Whitten",
    date: "17 Jan 2026",
    title: "A Quick Brown Fox Jumps Over A Lazy Dog And Eats Him",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    tag: "Category Tag",
    image: BlogsHeroImg,
  },
];

export default function BlogsHero() {
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
    <ScrollThemeSection theme="dark" className="pt-32 pb-20">
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
            {posts.map((post, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: mock list
              <div key={i} className="flex-[0_0_100%] min-w-0 pr-4">
                <Link
                  href="/blogs/featured"
                  className="grid lg:grid-cols-2 gap-12 items-center group cursor-pointer"
                >
                  {/* Image Side */}
                  <div className="relative w-full h-[347px] max-w-[552px] overflow-hidden rounded-[40px]">
                    <Image
                      src={post.image}
                      alt="Featured post"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <p className="text-primary font-semibold tracking-wide text-sm">
                        {post.author} • {post.date}
                      </p>
                      <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight group-hover:text-primary transition-colors">
                        {post.title}
                      </h1>
                      <p className="text-white/60 text-lg leading-relaxed">
                        {post.des}
                      </p>
                    </div>

                    {/* Category Tag */}
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">
                        {post.tag}
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
          {posts.map((_, i) => (
            <button
              type="button"
              // biome-ignore lint/suspicious/noArrayIndexKey: mock list
              key={i}
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
