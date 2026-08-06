import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "border border-solid border-ploy-neutral-primary-s3 bg-ploy-background-primary text-ploy-text-primary",
  {
    variants: {
      variant: {
        elevated:
          "shadow-[0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] rounded-2xl",
        interactive:
          "shadow-[0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] duration-150 ease-in-out rounded-2xl hover:shadow-card hover:translate-y-[-0.125rem] hover:shadow-[0_0_color-mix(in_srgb,var(--ploy-neutral-inverse)_0%,transparent),0_0_color-mix(in_srgb,var(--ploy-neutral-inverse)_0%,transparent),0_1px_3px_rgba(15,17,24,0.05),0_12px_40px_rgba(15,17,24,0.08)]",
        panel:
          "shadow-[0px_1px_3px_0px_rgba(15,17,24,0.05),0px_12px_40px_0px_rgba(15,17,24,0.08)] shadow-card rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "elevated",
    },
  },
);

export type CardProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof cardVariants> & {
    as?: "article" | "div";
  };

/**
 * @ployComponent
 * @ployComponentId card
 * @ployComponentType component
 * @ployComponentPattern card
 * @ployComponentDescription Brand surface primitive for elevated, interactive, and product-panel cards.
 * @ployComponentTags ui surface
 * @ployComponentStatus stable
 */
export const Card = forwardRef<HTMLElement, CardProps>(
  ({ as = "div", className, variant, ...props }, ref) =>
    createElement(as, {
      ref,
      className: cn(cardVariants({ variant }), className),
      ...props,
    }),
);

Card.displayName = "Card";

export { cardVariants };
