"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Facebook, MoveUpRight } from "lucide-react";
import Logo from "@/public/app-logo-full.png";
import OwlImg from "@/public/cta-img.png";
import ScrollThemeSection from "./scroll-theme-section";
import { usePathname } from "next/navigation";
import ContactButton from "./ui/contact-button";

const XIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="X (formerly Twitter)"
    role="img"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export default function Footer() {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about-us";

  return (
    <ScrollThemeSection className="bg-secondary bg-[#141414] text-white mt-32.5 space-y-32.5">
      {/* CTA Section */}
      <div className="relative">
        <div className="absolute bottom-1/2 top-0 left-0 w-full bg-white"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-[#16653e] text-primary-foreground rounded-[32px] p-12 md:p-20 relative overflow-hidden">
            <div className="space-y-8 relative z-10">
              <h2>
                {isAboutPage ? (
                  <>
                    Stay Close to
                    <br />{" "}
                    <span className="font-secondary font-normal">
                      What's Changing
                    </span>
                  </>
                ) : (
                  <>
                    We're Your Marketing Team's{" "}
                    <span className="font-secondary italic font-normal">
                      Extend Button.
                    </span>
                  </>
                )}
              </h2>
              <p className="lg:max-w-2xl text-white/80 text-lg leading-relaxed font-light">
                {isAboutPage
                  ? "Practical thinking on AI search, B2B content, digital strategy, websites, and performance-driven growth, without recycled advice or trend-driven filler."
                  : "We exist to help B2B brands close the gap between what marketing could be and what it actually delivers, without the fluff, filler, or cookie-cutter templates."}
              </p>
              <ContactButton className="bg-white text-primary">
                Book a call
              </ContactButton>
            </div>

            {/* Decorative Owl Watermark */}
            <div className="absolute w-64 right-0 bottom-0 opacity-70 mix-blend-plus-lighter pointer-events-none select-none">
              <Image src={OwlImg} alt="Owl" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-5">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-8">
          {/* Logo and Socials */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src={Logo}
                alt="Yarn Owls"
                width={180}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/company/yarn-owls/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 fill-[#0077b5] text-[#0077b5]" />
              </Link>
              <Link
                href="https://www.instagram.com/yarn_owls/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110"
              >
                <div className="p-1 rounded bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/yarnowls/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110"
              >
                <Facebook className="w-6 h-6 fill-[#1877f2] text-[#1877f2]" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 max-lg:gap-8">
            <div className="space-y-6">
              <h4 className="text-zinc-500 font-semibold text-xs tracking-widest uppercase">
                Services
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Demand Generation", href: "/demand-gen" },
                  { name: "Inbound", href: "/inbound" },
                  { name: "Creative", href: "/creative" },
                  { name: "UI/UX Designing", href: "/ui-ux" },
                  { name: "PPC", href: "/ppc" },
                  { name: "AI Seo", href: "/ai-seo" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-zinc-500 font-semibold text-xs tracking-widest uppercase">
                Company
              </h4>
              <ul className="space-y-4">
                {[{ name: "About Us", href: "/about-us" }].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-zinc-500 font-semibold text-xs tracking-widest uppercase">
                Resources
              </h4>
              <ul className="space-y-4">
                {[{ name: "Blogs", href: "/blogs" }].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-zinc-500 font-semibold text-xs tracking-widest uppercase">
                Get In Touch
              </h4>
              <div className="space-y-4 text-sm font-medium leading-relaxed">
                <p className="max-w-[200px] text-white">
                  4th Floor, Gallway House, 1, Camac St, Park Street Area,
                  Kolkata, West Bengal 700016
                </p>
                <p className="text-white">+91 7550619369</p>
                <Link
                  href="mailto:atriya@yarnowls.com"
                  className="block hover:text-white transition-colors"
                >
                  atriya@yarnowls.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-[#0a0a0a] py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>2026 Yarn Owls | All rights reserved</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-zinc-700">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </ScrollThemeSection>
  );
}
