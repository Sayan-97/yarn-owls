"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import LogoIcon from "@/public/app-logo-full.png";
import { Button } from "./ui/button";
import { contactModalState } from "@/components/contact-modal";

const NAV_LINKS = [
  { label: "Our Services", href: "#" },
  { label: "About Us", href: "/about-us" },
  { label: "Resources", href: "/blogs" },
];

const SERVICES = [
  { label: "Demand-Gen", href: "/demand-gen" },
  { label: "Inbound", href: "/inbound" },
  { label: "Creative", href: "/creative" },
  { label: "UI/UX", href: "/ui-ux" },
  { label: "PPC", href: "/ppc" },
  { label: "AI SEO", href: "/ai-seo" },
];

/** Nav link with a sliding underline on hover */
function NavLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={href}
        className="relative text-white/80 hover:text-white transition-colors text-sm font-medium whitespace-nowrap py-4 flex flex-col items-center gap-0"
      >
        <span className="flex items-center gap-1.5 leading-none">
          {label}
          {children && (
            <ChevronDown
              className={`size-3.5 transition-all duration-300 ease-out shrink-0 ${
                hovered ? "rotate-180 opacity-100" : "opacity-60"
              }`}
            />
          )}
        </span>
        <motion.span
          className="absolute bottom-3 left-0 h-[1.5px] bg-white rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </Link>
      {children && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-2 px-2"
            >
              <div className="bg-[#0a0a0a] border border-[#474747] rounded-xl overflow-hidden min-w-[160px] shadow-2xl">
                {SERVICES.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
}

export default function Header() {
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const y = useSpring(0, { stiffness: 260, damping: 28, mass: 0.9 });
  const topOffset = useSpring(40, { stiffness: 260, damping: 28, mass: 0.9 });

  useMotionValueEvent(scrollY, "change", (current) => {
    const delta = current - lastScrollY.current;

    // Shift top position based on scroll progress
    if (current > 50) {
      topOffset.set(24); // top-6
    } else {
      topOffset.set(40); // top-10
    }

    if (Math.abs(delta) < 8) return;

    if (delta > 0 && current > 100) {
      y.set(-110); // increased slightly to clear the higher top-6 position
    } else {
      y.set(0);
    }
    lastScrollY.current = current;
  });

  return (
    <motion.header
      className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] md:max-w-[50%]"
      style={{ y, top: topOffset }}
    >
      <nav className="bg-[#0a0a0a] border border-[#474747] rounded-2xl p-1.5 flex items-center shadow-2xl min-w-[320px] md:min-w-[630px]">
        {/* Logo */}
        <Link href="/" className="ml-5 shrink-0 flex items-center">
          <Image
            src={LogoIcon}
            alt="Yarn Owls"
            width={96}
            height={22}
            className=""
          />
        </Link>

        {/* Desktop nav links */}
        <div className="flex-1 hidden md:flex justify-center px-4">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href}>
                {link.label === "Our Services" && <div />}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* CTA – desktop */}
        <div className="hidden md:block">
          <Button
            className="h-11 rounded-xl cursor-pointer"
            onClick={() => contactModalState.open()}
          >
            Get In Touch
            <ArrowUpRight className="size-5" />
          </Button>
        </div>

        {/* Mobile: CTA + hamburger icon */}
        <div className="flex md:hidden items-center gap-2 ml-auto mr-1.5">
          <Button
            className="h-9 rounded-xl text-xs px-3 gap-1.5 cursor-pointer"
            onClick={() => contactModalState.open()}
          >
            Get In Touch
            <ArrowUpRight className="size-4" />
          </Button>

          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#474747] text-white"
            aria-label="Toggle menu"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
