import RelatedBlogs from "./_components/related-blogs";
import BlogContent from "./_components/blog-content";
import BlogDetailHero from "./_components/blog-detail-hero";

export default function BlogsDetailsPage() {
  return (
    <div className="space-y-[130px]">
      <div className="space-y-0">
        <BlogDetailHero />
        <div className="container">
          <hr className="border-muted/20" />
        </div>
      </div>
      <BlogContent />
      <RelatedBlogs />
    </div>
  );
}
