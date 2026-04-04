"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { Button } from "./ui/button";
import PopupBg from "@/public/popup-bg.webp";

// A simple pub/sub state for the modal
class ModalState {
  isOpen = false;
  listeners = new Set<(isOpen: boolean) => void>();

  open = () => {
    this.isOpen = true;
    this.notify();
  };

  close = () => {
    this.isOpen = false;
    this.notify();
  };

  subscribe = (listener: (isOpen: boolean) => void) => {
    this.listeners.add(listener);
    listener(this.isOpen);
    return () => {
      this.listeners.delete(listener);
    };
  };

  private notify = () => {
    this.listeners.forEach((listener) => {
      listener(this.isOpen);
    });
  };
}

export const contactModalState = new ModalState();

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(contactModalState.isOpen);

  useEffect(() => {
    return contactModalState.subscribe(setIsOpen);
  }, []);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      // Set to hidden to stop scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Clear the inline style so the body falls back to its CSS class overflow-x-hidden
      document.body.style.overflow = "";
    }
    return () => {
      // Cleanup
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Wait for React hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-99999 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0C0C0C]/80 backdrop-blur-md cursor-pointer"
            onClick={contactModalState.close}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-[968px] lg:h-[643px] max-h-[90vh] rounded-[28px] overflow-hidden shadow-2xl flex flex-col lg:flex-row bg-[#020603] border border-white/5"
          >
            {/* Background Image */}
            <Image
              src={PopupBg}
              alt="Popup Background"
              fill
              className="object-cover object-center pointer-events-none opacity-90"
              priority
            />

            {/* Close Button */}
            <button
              onClick={contactModalState.close}
              className="absolute top-5 right-5 z-50 p-2 text-white/40 hover:text-white hover:bg-white/10 transition-all bg-white/5 rounded-full backdrop-blur-md border border-white/10 cursor-pointer"
              aria-label="Close"
              type="button"
            >
              <X className="size-5" />
            </button>

            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
              {/* Left Side */}
              <div className="pr-6 pl-10 pt-16 pb-10 lg:p-14 lg:pr-10 flex-1 flex flex-col justify-center">
                <h2 className="text-[32px] md:text-[44px] leading-[1.1] font-normal text-white mb-6">
                  Let's Talk{" "}
                  <span className="font-secondary italic">Revenue,</span>
                  <br />
                  <span className="font-secondary italic">
                    Retention, And Results
                  </span>
                </h2>

                <div className="w-full h-[1px] bg-primary mb-10" />

                <p className="text-[17px] md:text-[24px] font-normal text-white max-w-[400px] leading-[1.6]">
                  We partner with ambitious brands to create smarter systems for
                  growth. Drop us a note and let's explore how we can support
                  your next stage.
                </p>
              </div>

              {/* Right Side - Form */}
              <div className="p-6 pt-0 lg:p-14 lg:pl-0 flex items-center justify-center lg:w-1/2 shrink-0">
                <div className="w-full max-w-[400px] lg:ml-auto bg-black/40 border border-white/5 rounded-3xl p-6 lg:p-8 backdrop-blur-xl shadow-2xl shadow-primary/5">
                  <h3 className="text-xl font-medium text-white mb-6">
                    Get in touch
                  </h3>

                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      contactModalState.close();
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Full Name*"
                      required
                      className="w-full h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-all [font-size:inherit] autofill:shadow-[0_0_0_1000px_#060806_inset] autofill:text-white [-webkit-text-fill-color:white]"
                    />

                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-all [font-size:inherit] autofill:shadow-[0_0_0_1000px_#060806_inset] autofill:text-white [-webkit-text-fill-color:white]"
                    />

                    <input
                      type="email"
                      placeholder="Work Email*"
                      required
                      className="w-full h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-all [font-size:inherit] autofill:shadow-[0_0_0_1000px_#060806_inset] autofill:text-white [-webkit-text-fill-color:white]"
                    />

                    <div className="relative">
                      <select
                        defaultValue=""
                        required
                        className="w-full h-12 appearance-none bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white focus:outline-none focus:border-primary/50 transition-all cursor-pointer invalid:text-white/40"
                      >
                        <option
                          value=""
                          disabled
                          className="bg-[#020603] text-white/40"
                        >
                          Select Services
                        </option>
                        <option
                          value="demand-gen"
                          className="bg-[#020603] text-white"
                        >
                          Demand Generation
                        </option>
                        <option
                          value="inbound"
                          className="bg-[#020603] text-white"
                        >
                          Inbound Marketing
                        </option>
                        <option
                          value="creative"
                          className="bg-[#020603] text-white"
                        >
                          Creative Execution
                        </option>
                        <option
                          value="ui-ux"
                          className="bg-[#020603] text-white"
                        >
                          UI/UX Design
                        </option>
                        <option value="ppc" className="bg-[#020603] text-white">
                          Paid Media (PPC)
                        </option>
                        <option
                          value="ai-seo"
                          className="bg-[#020603] text-white"
                        >
                          AI Search (SEO)
                        </option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-white/40 pointer-events-none" />
                    </div>

                    <textarea
                      placeholder="Message"
                      rows={3}
                      className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-all resize-none mb-1"
                    />

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-[14px] rounded-xl h-auto flex items-center justify-center gap-2 transition-colors !mt-5 text-[15px] cursor-pointer"
                    >
                      Submit
                      <ArrowUpRight className="size-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
