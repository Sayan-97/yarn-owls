import BlogsList from "./_components/blogs-list";
import BlogsHero from "./_components/blogs-hero";

export default function BlogsPage() {
  return (
    <div className="space-y-[130px]">
      <BlogsHero />
      <BlogsList />
    </div>
  );
}
