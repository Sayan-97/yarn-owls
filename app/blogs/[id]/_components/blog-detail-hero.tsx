import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import Link from "next/link";
import BlogDetailHeroImg from "@/public/blog-detail-hero-img.png";

export default function BlogDetailHero() {
  return (
    <ScrollThemeSection className="pt-32 pb-20">
      <div className="container space-y-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm font-medium">
          <Link
            href="/blogs"
            className="text-muted hover:text-foreground transition-colors"
          >
            Blogs
          </Link>
          <span className="text-muted">/</span>
          <span className="text-primary">A quick brownfox</span>
        </nav>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                Category Tag
              </span>
              <h1 className="text-4xl lg:text-5xl lg:text-[56px] font-bold leading-tight">
                A Quick Brown Fox Jumps Over A Lazy Dog And Eats Him
              </h1>
              <p className="text-muted text-lg lg:text-xl leading-relaxed">
                Struggling with B2B demand gen in a crowded market? Learn how
                low-spend, high-precision strategies can help small teams
                outperform big competitors and build sustainable pipeline
                growth.
              </p>
            </div>

            {/* Metadata */}
            <p className="text-muted text-sm font-medium">
              Alec Whitten • 17 Jan 2025 • 10 Min Read
            </p>
          </div>

          {/* Image Side */}
          <div className="relative w-full h-[359px] max-w-[569px] overflow-hidden rounded-[40px]">
            <Image
              src={BlogDetailHeroImg}
              alt="Blog detail hero"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
