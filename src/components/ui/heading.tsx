import { cva, type VariantProps } from "class-variance-authority";
import { createElement, forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-semibold", {
  variants: {
    variant: {
      hero: "text-balance -tracking-wide max-md:leading-none max-md:text-4xl md:leading-none md:text-6xl",
      section:
        "text-balance -tracking-wide max-md:text-3xl md:text-4xl",
      card: "text-xl -tracking-wide",
      item: "text-lg",
    },
    tone: {
      default: "text-ploy-neutral-inverse-900",
      inverse: "text-ploy-text-inverse",
      inherit: "",
    },
    align: {
      left: "",
      center: "text-center",
    },
  },
  defaultVariants: {
    variant: "section",
    tone: "default",
    align: "left",
  },
});

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4";
  };

/**
 * @ployComponent
 * @ployComponentId heading
 * @ployComponentType component
 * @ployComponentPattern heading
 * @ployComponentDescription Brand heading primitive preserving hero, section, card, and inverse type treatments.
 * @ployComponentTags ui typography
 * @ployComponentStatus stable
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h2", className, variant, tone, align, ...props }, ref) =>
    createElement(as, {
      ref,
      className: cn(headingVariants({ variant, tone, align }), className),
      ...props,
    }),
);

Heading.displayName = "Heading";

export { headingVariants };
