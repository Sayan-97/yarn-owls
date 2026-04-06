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
import ContactButton from "./ui/contact-button";

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
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const y = useSpring(0, { stiffness: 260, damping: 28, mass: 0.9 });
  const topOffset = useSpring(40, { stiffness: 260, damping: 28, mass: 0.9 });

  const [servicesOpen, setServicesOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const delta = current - lastScrollY.current;

    // Shift top position based on scroll progress
    if (current > 50) {
      topOffset.set(24); // top-6
    } else {
      topOffset.set(40); // top-10
    }

    if (Math.abs(delta) < 8) return;

    if (delta > 0 && current > 100 && !isOpen) {
      y.set(-150); // increased to clear top position and ensure it's hidden
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
      <nav className="bg-[#0a0a0a] border border-[#474747] rounded-2xl p-1.5 flex flex-col shadow-2xl relative">
        <div className="flex items-center min-w-full h-12 md:h-auto">
          {/* Logo */}
          <Link
            href="/"
            className="ml-5 shrink-0 flex items-center"
            onClick={() => setIsOpen(false)}
          >
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
            <ContactButton className="h-10 text-sm">Get In Touch</ContactButton>
          </div>

          {/* Mobile: hamburger icon only */}
          <div className="flex md:hidden items-center gap-2 ml-auto mr-1.5">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-xl border border-[#474747] text-white transition-colors ${
                isOpen ? "bg-white/10" : ""
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="relative size-5 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: -6 },
                    open: { rotate: 45, y: 0 },
                  }}
                  className="absolute h-0.5 w-5 bg-white rounded-full transition-transform"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="absolute h-0.5 w-5 bg-white rounded-full transition-all"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 6 },
                    open: { rotate: -45, y: 0 },
                  }}
                  className="absolute h-0.5 w-5 bg-white rounded-full transition-transform"
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-1 p-4 pt-2 border-t border-white/5 mt-1.5">
                {NAV_LINKS.map((link) => (
                  <div key={link.label} className="w-full">
                    {link.label === "Our Services" ? (
                      <div className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full py-3 px-4 text-left text-white/80 font-medium hover:bg-white/5 rounded-xl transition-colors"
                        >
                          {link.label}
                          <ChevronDown
                            className={`size-4 transition-transform duration-300 ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 flex flex-col gap-1"
                            >
                              {SERVICES.map((service) => (
                                <Link
                                  key={service.label}
                                  href={service.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2.5 px-4 text-sm text-white/60 hover:text-white transition-colors"
                                >
                                  {service.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block w-full py-3 px-4 text-white/80 font-medium hover:bg-white/5 rounded-xl transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Button
                    className="w-full h-12 rounded-xl"
                    onClick={() => {
                      setIsOpen(false);
                      contactModalState.open();
                    }}
                  >
                    Get In Touch
                    <ArrowUpRight className="size-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
