import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { getWixImageUrl } from "@/lib/wix";

export default function BlogDetailHero({
  post,
  author,
}: {
  post: Post;
  author: string;
}) {
  return (
    <ScrollThemeSection theme="dark" className="pt-32 pb-20 lg:pb-40">
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
          <span className="text-primary">
            {post.title.split(" ").slice(0, 3).join(" ")}
            {post.title.split(" ").length > 3 && "..."}
          </span>
        </nav>

        <div className="flex gap-14 items-center">
          {/* Image Side */}
          <div className="relative w-full h-[359px] max-w-[569px] overflow-hidden rounded-[40px]">
            <Image
              src={getWixImageUrl(post.media?.wixMedia?.image) || ""}
              alt="Blog detail hero"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Content Side */}
          <div className="space-y-4">
            {/* Metadata */}
            <p className="text-muted text-sm font-medium">
              {author} • {formatDate(post?.lastPublishedDate.toString())} •{" "}
              {post.minutesToRead} Min Read
            </p>
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-4xl font-bold leading-wide">
                {post.title}
              </h1>
              <p className="text-muted text-lg lg:text-xl leading-relaxed">
                {post.excerpt}
              </p>
              <span className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                Category Tag
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
