import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-[8px] border border-[#B3B3B3] bg-white px-3 py-2 text-sm text-[#1A1A1A] placeholder:text-[#666666] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#034694] focus-visible:border-[#034694] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
