import ScrollThemeSection from "@/components/scroll-theme-section";
import {
  FacebookIcon,
  LinkedinIcon,
  OptionIcon as PinterestIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import RichContentViewer from "./RichContentViewer";

export default function BlogContent({ content }: { content: unknown }) {
  const tableOfContents = [
    { title: "The problem", id: "problem" },
    { title: "How can we tell", id: "how" },
    { title: "What can you do", id: "what" },
    { title: "The upshot", id: "upshot" },
  ];

  return (
    <ScrollThemeSection>
      <div className="container grid lg:grid-cols-[1fr_300px] gap-20 items-start">
        {/* Main Content */}
        <RichContentViewer content={content} />

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-32 space-y-12 h-fit">
          <div className="space-y-6">
            <h4 className="font-bold">What's on this page:</h4>
            <div className="flex flex-col gap-4">
              {tableOfContents.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-primary hover:underline font-medium"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <h4 className="font-bold">Repost :</h4>
            <div className="flex items-center gap-4 text-muted">
              <Link href="#" className="hover:text-primary transition-colors">
                <PinterestIcon className="size-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <LinkedinIcon className="size-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <FacebookIcon className="size-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <TwitterIcon className="size-5" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </ScrollThemeSection>
  );
}
