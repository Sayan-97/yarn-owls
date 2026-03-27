export default function ChooseUs() {
  const list = [
    {
      title: "Integrated, Not Isolated",
      des: "Most teams run separate efforts and hope they connect. We build systems where every channel feeds the next.",
      icon: "",
    },
    {
      title: "Data-Driven, Not Guesswork",
      des: "We base decisions on search behavior, conversion patterns, and attribution data. Strategy flows from evidence, not hunches.",
      icon: "",
    },
    {
      title: "Built for You, Not Borrowed",
      des: "Generic playbooks ignore your market reality. We design around your actual buyers, deal cycles, and business model",
      icon: "",
    },
    {
      title: "Strategy First, Channels Second",
      des: "We don't default to tactics. The right mix depends on where your buyers are and how they decide.",
      icon: "",
    },
    {
      title: "Expertise Without Headcount",
      des: "Great marketing needs the right skills at the right time, not permanent teams. We deliver both without expanding your payroll.",
      icon: "",
    },
  ];

  return (
    <div className="container grid lg:grid-cols-2 gap-8 items-start">
      <div className="space-y-6 lg:sticky lg:top-20">
        <h2>
          Why Teams Choose Us{" "}
          <span className="text-highlight">Over Hiring.</span>
        </h2>
      </div>
      <div className="grid gap-20">
        {list.map((item) => (
          <div key={item.title} className="flex items-center gap-6">
            <div className="size-20 shrink-0 bg-primary dark:bg-[#202020] rounded-lg"></div>
            <div className="space-y-3.5">
              <h4>{item.title}</h4>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
