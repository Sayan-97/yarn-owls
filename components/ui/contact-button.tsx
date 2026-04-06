"use client";

import type * as React from "react";
import { Button } from "./button";
import { contactModalState } from "@/components/contact-modal";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";

export default function ContactButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn(
        "cursor-pointer group/contact h-12 px-3 rounded-xl text-base flex items-center justify-between gap-2",
        className,
      )}
      onClick={() => contactModalState.open()}
      {...props}
    >
      <span className="font-medium">{children}</span>
      <ArrowRightIcon className="size-5 transition-transform duration-300 -rotate-45 group-hover/contact:rotate-0" />
    </Button>
  );
}
