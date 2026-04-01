"use client";

import type * as React from "react";
import { Button } from "./button";
import { contactModalState } from "@/components/contact-modal";
import { cn } from "@/lib/utils";

export default function ContactButton({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      className={cn("cursor-pointer", className)}
      onClick={() => contactModalState.open()}
      {...props}
    >
      {children}
    </Button>
  );
}
