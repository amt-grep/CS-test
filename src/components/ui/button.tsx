import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-semibold text-sm flex justify-center items-center gap-2 duration-150 ease-in-out",
  {
    variants: {
      variant: {
        solid:
          "bg-ploy-button-secondary-background text-ploy-button-secondary-text shadow-[0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] hover:bg-ploy-button-secondary-background hover:shadow-[0_0_color-mix(in_srgb,var(--ploy-neutral-inverse)_0%,transparent),0_0_color-mix(in_srgb,var(--ploy-neutral-inverse)_0%,transparent),0_20px_60px_-20px_rgba(31,168,130,0.35)]",
        outline:
          "border border-solid border-ploy-button-secondary-border bg-ploy-background-primary text-gray-700 shadow-[0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] hover:bg-ploy-background-secondary",
        inverse:
          "bg-ploy-background-primary text-ploy-neutral-inverse-900 shadow-[0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] hover:bg-ploy-neutral-primary-s3",
        "inverse-outline":
          "border border-solid border-ploy-button-secondary-border/20 text-ploy-button-secondary-text transition-colors hover:bg-ploy-background-primary/10",
      },
      size: {
        nav: "px-4 py-2 rounded-lg",
        cta: "px-6 py-3.5 rounded-xl",
      },
      responsive: {
        fixed: "",
        "mobile-full": "max-md:w-full",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "cta",
      responsive: "fixed",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

/**
 * @ployComponent
 * @ployComponentId button
 * @ployComponentType component
 * @ployComponentPattern button
 * @ployComponentDescription Brand button primitive for solid, outline, and inverse CTA treatments.
 * @ployComponentTags ui cta
 * @ployComponentStatus stable
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, variant, size, responsive, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, size, responsive }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { buttonVariants };
