"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";
import { contactModalState } from "@/components/contact-modal";

export default function HeroContactButton() {
  return (
    <Button
      size="lg"
      className="h-11 mx-auto cursor-pointer"
      onClick={() => contactModalState.open()}
    >
      Get Started <ArrowUpRightIcon />
    </Button>
  );
}
