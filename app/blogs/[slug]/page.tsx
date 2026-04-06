// import RelatedBlogs from "./_components/related-blogs";
import BlogContent from "./_components/blog-content";
import BlogDetailHero from "./_components/blog-detail-hero";
import { wixClient } from "@/lib/wix";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await wixClient.posts.queryPosts().find();
  return posts.items.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const res = await wixClient.posts.getPostBySlug((await params).slug);
  const post = res.post;
  return {
    title: post?.title,
  };
}

export default async function BlogsDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await wixClient.posts.getPostBySlug(slug, {
    fieldsets: ["RICH_CONTENT"],
  });
  const post = res.post;
  const member = await wixClient.members.getMember(post?.memberId as string);
  return (
    <div className="space-y-[130px]">
      <div className="space-y-0">
        <BlogDetailHero post={post as Post} author={member.profile.nickname} />
        <div className="container">
          <hr className="border-muted/20" />
        </div>
      </div>
      <BlogContent content={post?.richContent} />
      {/* <RelatedBlogs /> */}
    </div>
  );
}
