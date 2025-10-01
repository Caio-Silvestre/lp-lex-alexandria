import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-md 
    text-14px font-medium transition-all duration-200 cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
    disabled:pointer-events-none py-[12px] px-[16px]
    rounded-[8px] max-h-[44px] max-w-[320px]`,
  {
    variants: {
      variant: {
        default:
          "bg-gradient-primary text-secondary hover:brightness-80 active:brightness-100 disabled:font-medium disabled:text-[#000000]/70 disabled:brightness-150 [&:disabled]:bg-gradient-primary-brightness",
        secondary:
          "bg-gradient-primary text-primary  disabled:brightness-150 disabled:saturate-50 p-[1.5px] ",
        ghost:
          "text-primary  disabled:brightness-150 disabled:saturate-50 p-[1.5px] ",
        link: "text-primary underline-offset-4 hover:underline disabled:no-underline",
      },
      size: {
        default: "h-9",
        sm: "h-8",
        lg: "h-10 ",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
