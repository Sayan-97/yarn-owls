import ScrollThemeSection from "@/components/scroll-theme-section";
import {
  FacebookIcon,
  LinkedinIcon,
  OptionIcon as PinterestIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function BlogContent() {
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
        <div className="space-y-12">
          {/* Section 1 */}
          <article id="problem" className="space-y-6">
            <h2 className="text-3xl font-bold">The problem</h2>
            <p className="text-muted leading-relaxed">
              Companies are investing in data at record levels, and hiring more
              C-suite data execs than ever ever. But for all their efforts
              around data transformation, companies are seeing little
              improvement in the business.
            </p>
          </article>

          {/* Section 2 */}
          <article id="how" className="space-y-6">
            <h2 className="text-3xl font-bold">How we can tell</h2>
            <p className="text-muted leading-relaxed">
              Only 47% of companies in a 2022 study say they are able to compete
              on data and analytics, and just 26.5% say they have established a
              data culture. According to Randy Bean, CEO and founder of
              NewVantage Partners, "Most organisations are not historically set
              up to manage data as an asset and harness its potential to deliver
              business value."
            </p>
          </article>

          {/* Section 3 */}
          <article id="what" className="space-y-6">
            <h2 className="text-3xl font-bold">What you can do</h2>
            <ul className="space-y-4 list-disc pl-5 text-muted">
              <li>
                Hire data executives with a background in organisational change,
                not just data technology and analytics.
              </li>
              <li>
                Work with change management experts to understand barriers to
                establishing data cultures, and how to remove them.
              </li>
              <li>
                Promote data-driven decision-making, and hire and promote those
                who practice it.
              </li>
              <li>
                Celebrate data successes and highlight them at all levels of the
                organisation.
              </li>
            </ul>
          </article>

          {/* Section 4 */}
          <article id="upshot" className="space-y-6">
            <h2 className="text-3xl font-bold">The upshot</h2>
            <ul className="space-y-4 list-disc pl-5 text-muted">
              <li>
                Highly-data driven orgs are three times as likely to see big
                improvements in decision-making.
              </li>
              <li>
                Data-driven orgs can leverage data proactively, identifying
                opportunities or competitive threats early.
              </li>
              <li>
                Data-driven companies have higher rates of customer retention,
                since the data helps them understand how to keep customers
                happy.
              </li>
            </ul>

            <p className="text-muted leading-relaxed">
              To kickstart a data transformation, chief data officers need to
              speak the language of business
            </p>

            <p className="text-muted leading-relaxed">
              There are transformative benefits to unifying your company's data
              across channels and departments, and making it available and
              accessible to every corner of the organisation. That starts, as
              all transformations do, at the top. Today, nearly three-quarters
              of Fortune 1000 companies have a chief data or analytics officer.
              But too many organisations build data capabilities that are not
              connected to critical business questions. As a result, business
              leaders (the ones who control budgets and organisational
              initiatives) wind up believing there is little value in investing
              in them.
            </p>

            <p className="text-muted italic leading-relaxed pl-6 border-l-4 border-primary/20">
              "Data leaders need to answer the question of what they need to
              deliver better customer experience, service, or to enter new
              markets," said Bean. "Then you ask what data you need to answer
              those questions, and who needs access to that data. If you do
              that, you've established the most important thing, which is trust
              and credibility with the business."
            </p>

            <p className="text-muted leading-relaxed">
              A case in point is the fast-growing 5-year-old Danish car
              subscription company Dribe, whose primary investor hails from the
              traditional auto industry. Executives who led companies in the
              pre-internet era "aren't inclined to believe data, so you've got
              to do two things: show very specific use cases, and serve the data
              on a silver platter so it is extremely easy to understand," said
              Erik Asbjørn Arvid, Dribe's chief technology officer.
            </p>
          </article>
        </div>

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
