import type { ReactNode } from "react";

import { Heading } from "@/components/ui/heading";
import HowItWorksSectionIcon1 from "../svgs/how-it-works-section-icon-1";
import HowItWorksSectionIcon2 from "../svgs/how-it-works-section-icon-2";
import HowItWorksSectionIcon3 from "../svgs/how-it-works-section-icon-3";
import HowItWorksSectionIcon4 from "../svgs/how-it-works-section-icon-4";

/**
 * @ployComponent
 * @ployComponentId how-it-works-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from label: How it works
 */
type HowItWorksSectionIconItemProps = {
  icon: ReactNode;
  stepLabel: string;
  title: string;
  description: string;
};

function HowItWorksSectionIconItem({
  icon,
  stepLabel,
  title,
  description,
}: HowItWorksSectionIconItemProps) {
  return (
    <div className="relative">
      <div className="min-w-0 flex gap-4 max-lg:items-center lg:items-start lg:flex-col">
        <span className="bg-ploy-background-primary/10 w-14 h-14 relative z-10 flex shrink-0 justify-center items-center shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_color-mix(in_srgb,var(--ploy-neutral-primary)_15%,transparent)] backdrop-blur-sm rounded-2xl">
          {icon}
          <span className="bg-ploy-accent-primary-400 text-ploy-neutral-inverse-900 font-bold text-xs w-5 h-5 min-w-0 absolute flex justify-center items-center rounded-full -right-1.5 -top-1.5">
            {stepLabel}
          </span>
        </span>
        <div className="lg:mt-5">
          <h3 className="font-semibold text-lg min-w-0">{title}</h3>
          <p className="text-[rgb(176,183,198)] leading-relaxed text-sm min-w-0 mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export const howItWorksSectionIcons: HowItWorksSectionIconItemProps[] = [
  {
    icon: <HowItWorksSectionIcon1 />,
    stepLabel: "1",
    title: "Bring in the charges",
    description:
      "Upload a card statement or connect Plaid, QuickBooks, or Xero.",
  },
  {
    icon: <HowItWorksSectionIcon2 />,
    stepLabel: "2",
    title: "Connect the proof",
    description:
      "Connect Gmail and Google Drive or upload invoices and receipts directly.",
  },
  {
    icon: <HowItWorksSectionIcon3 />,
    stepLabel: "3",
    title: "Auto-match the records",
    description:
      "ClearSpend compares vendor, amount, and date to identify the most likely supporting evidence.",
  },
  {
    icon: <HowItWorksSectionIcon4 />,
    stepLabel: "4",
    title: "Review only the exceptions",
    description:
      "Matched transactions are organized automatically. Anything missing or uncertain stays visible for review.",
  },
];

export default function HowItWorksSection({
  items = howItWorksSectionIcons,
}: {
  items?: HowItWorksSectionIconItemProps[];
}) {
  return (
    <section
      id="how-it-works"
      className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse min-w-0 relative max-md:py-24 md:py-32 overflow-hidden"
    >
      <div className="min-w-0 absolute -z-10 opacity-30 inset-0">
        <div className="bg-ploy-background-accent-primary/40 w-[43.75rem] h-72 min-w-0 absolute blur-3xl -translate-x-2/4 rounded-full left-2/4 top-0" />
      </div>
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <div className="text-center min-w-0 max-w-2xl mx-auto">
          <p className="text-ploy-accent-primary-400 font-semibold text-sm tracking-wider uppercase min-w-0">
            {"How it works"}
          </p>
          <Heading tone="inherit" align="center" className="min-w-0 mt-3">
            {"From real charges to a review-ready evidence trail"}
          </Heading>
          <p className="text-pretty text-[rgb(176,183,198)] text-base min-w-0 mt-4">
            {"Four steps from raw statements to a clean, audit-ready record."}
          </p>
        </div>
        <div className="min-w-0 relative mt-16">
          <div
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0))",
            }}
            className="h-px min-w-0 absolute top-7 inset-x-0 min-[1024px]:block max-lg:hidden"
          />
          <div className="min-w-0 grid gap-8 lg:grid-cols-4 md:max-lg:grid-cols-[repeat(2,minmax(0px,1fr))]">
            {items.map((item, index) => (
              <HowItWorksSectionIconItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
