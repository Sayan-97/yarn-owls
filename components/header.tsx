"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import LogoIcon from "@/public/app-logo-half.png";
import { Button } from "./ui/button";

const NAV_LINKS = ["Our Services", "About Us", "Contact Us", "Resources"];

/** Nav link with a sliding underline on hover */
function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <li>
      <Link
        href={href}
        className="relative text-white/80 hover:text-white transition-colors text-sm font-medium whitespace-nowrap py-1 flex flex-col items-center gap-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span>{label}</span>
        <motion.span
          className="absolute -bottom-0.5 left-0 h-[1.5px] bg-white rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      </Link>
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
      className="fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[95%] md:max-w-fit"
      style={{ y, top: topOffset }}
    >
      <nav className="bg-[#0a0a0a] border border-[#474747] rounded-2xl p-1.5 flex items-center shadow-2xl min-w-[320px] md:min-w-[630px]">
        {/* Logo */}
        <Link href="/" className="ml-5 shrink-0 flex items-center">
          <Image
            src={LogoIcon}
            alt="Yarn Owls"
            width={28}
            height={28}
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="flex-1 hidden md:flex justify-center px-4">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((item) => (
              <NavLink key={item} label={item} href="#" />
            ))}
          </ul>
        </div>

        {/* CTA – desktop */}
        <div className="hidden md:block">
          <Button className="h-11 rounded-xl">
            Get In Touch
            <ArrowUpRight className="size-5" />
          </Button>
        </div>

        {/* Mobile: CTA + hamburger icon */}
        <div className="flex md:hidden items-center gap-2 ml-auto mr-1.5">
          <Button className="h-9 rounded-xl text-xs px-3 gap-1.5">
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
