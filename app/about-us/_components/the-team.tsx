import ScrollThemeSection from "@/components/scroll-theme-section";
import Image from "next/image";

export default function TheTeam() {
  return (
    <ScrollThemeSection theme="dark" className="py-20 lg:py-40">
      <div className="container text-center space-y-6">
        <h1>
          <span className="font-secondary font-normal">The Team</span> Behind
          Yarn Owls
        </h1>
        <p className="w-3/4 mx-auto">
          We are strategists, writers, designers, and growth-minded operators
          who care about making every asset useful.Different disciplines. One
          standard. Build work that earns attention, creates clarity, and drives
          action.
          <br /> Yarn Owls was built to fix what most B2B marketing gets wrong:
          fragmented execution, scattered expertise, and teams optimizing for
          deliverables instead of business results. We operate as a full-stack
          agency, integrating strategy, content, design, digital experiences,
          and growth systems to solve real commercial problems, not just ship
          more marketing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-20">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-[24px] bg-muted aspect-291/333 lg:w-[291px] lg:h-[333px] mx-auto w-full max-w-[400px]"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                <h3 className="text-[24px] font-bold mb-1">{member.name}</h3>
                <p className="text-[20px] font-medium text-white/80 leading-tight">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* <ContactButton size="lg" className="h-11 mt-10 mx-auto">
          Join the Team <ArrowUpRightIcon />
        </ContactButton> */}
      </div>
    </ScrollThemeSection>
  );
}

const team = [
  {
    name: "Supratik",
    designation: "Head of Marketing & Founder",
    image: "/team-2.png",
  },
  {
    name: "Atriya",
    designation: "Head of Operations",
    image: "/team-1.png",
  },
  {
    name: "Aritra",
    designation: "Sales and Tech Lead",
    image: "/team-4.png",
  },
  {
    name: "Urna",
    designation: "Senior Content Lead",
    image: "/team-7.png",
  },
  {
    name: "Sritama",
    designation: "Content Marketing Manager",
    image: "/team-8.png",
  },
  {
    name: "Sukanya",
    designation: "Content Writer",
    image: "/team-6.png",
  },
  {
    name: "Subhayan",
    designation: "SEO Specialist",
    image: "/team-5.png",
  },
  {
    name: "Ipsita",
    designation: "Content Writer",
    image: "/team-3.png",
  },
];
