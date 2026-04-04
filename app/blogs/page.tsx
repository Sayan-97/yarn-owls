import BlogsList from "./_components/blogs-list";
import BlogsHero from "./_components/blogs-hero";
import { wixClient } from "@/lib/wix";
import { Suspense } from "react";
import Loader from "@/components/loader";

export default async function BlogsPage() {
  const posts: Promise<Post[]> = wixClient.posts
    .queryPosts()
    .find()
    .then(async (res) => {
      const items = res.items
        .filter((item) => item.slug && item.title)
        .map((item) => ({
          slug: item.slug as string,
          title: item.title as string,
          excerpt: item.excerpt as string,
          media: item.media,
          categoryIds: item.categoryIds,
          minutesToRead: item.minutesToRead as number,
          lastPublishedDate: item.lastPublishedDate as Date,
          memberId: (item as { memberId?: string }).memberId as string, // Extracting for nickname lookup
        }));

      // Get unique author IDs
      const authorIds = Array.from(
        new Set(
          items.map((i) => i.memberId).filter((id): id is string => !!id),
        ),
      );

      // Fetch author nicknames
      const members = await wixClient.members
        .queryMembers()
        .in("_id", authorIds)
        .find();
      const authorMap = new Map(
        members.items.map((m) => [
          m._id,
          m.profile?.nickname || "Alec Whitten",
        ]),
      );

      return items.map((post) => ({
        ...post,
        author: authorMap.get(post.memberId || "") || "Alec Whitten",
      }));
    });

  const categories: Promise<Category[]> = wixClient.categories
    .queryCategories()
    .find()
    .then((res) => res.items);

  return (
    <div className="space-y-20 lg:space-y-40">
      <Suspense fallback={<Loader />}>
        <BlogsHero posts={posts} categories={categories} />
        <BlogsList posts={posts} categories={categories} />
      </Suspense>
    </div>
  );
}
