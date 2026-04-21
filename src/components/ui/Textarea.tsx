import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const textareaClass =
  "min-h-[140px] w-full resize-y rounded-xl border border-border-subtle bg-surface/55 px-4 py-3 text-sm leading-relaxed text-foreground shadow-sm transition-[border-color,box-shadow,background-color] duration-200 ease-out placeholder:text-muted/65 hover:border-secondary/20 hover:bg-surface-elevated/30 focus:border-secondary/45 focus:bg-surface-elevated/50 focus:outline-none focus:ring-2 focus:ring-secondary/35 disabled:cursor-not-allowed disabled:opacity-50";

type TextareaProps = ComponentProps<"textarea"> & { className?: string };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref,
) {
  return <textarea ref={ref} className={cn(textareaClass, className)} {...props} />;
});
