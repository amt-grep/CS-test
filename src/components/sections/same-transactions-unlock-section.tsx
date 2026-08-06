import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import SameTransactionsUnlockSectionIcon1 from "../svgs/same-transactions-unlock-section-icon-1";
import SameTransactionsUnlockSectionIcon2 from "../svgs/same-transactions-unlock-section-icon-2";
import SameTransactionsUnlockSectionIcon3 from "../svgs/same-transactions-unlock-section-icon-3";

/**
 * @ployComponent
 * @ployComponentId same-transactions-unlock-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: The same transactions unlock more than matching
 */
type SameTransactionsUnlockSectionIconItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

function SameTransactionsUnlockSectionIconItem({
  icon,
  title,
  description,
}: SameTransactionsUnlockSectionIconItemProps) {
  return (
    <Card className="p-7">
      <span className="bg-ploy-accent-primary-50 text-ploy-accent-primary-700 w-11 h-11 min-w-0 flex justify-center items-center shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_rgb(214,247,233)] rounded-xl">
        {icon}
      </span>
      <Heading as="h3" variant="item" className="min-w-0 mt-5">
        {title}
      </Heading>
      <p className="text-slate-500 leading-relaxed text-sm min-w-0 mt-2.5">
        {description}
      </p>
    </Card>
  );
}

export const sameTransactionsUnlockSectionIcons: SameTransactionsUnlockSectionIconItemProps[] =
  [
    {
      icon: <SameTransactionsUnlockSectionIcon1 />,
      title: "Subscription tracking",
      description:
        "Syncs Gmail, Google Drive, and company cards to detect every SaaS charge automatically.",
    },
    {
      icon: <SameTransactionsUnlockSectionIcon2 />,
      title: "AI Spend",
      description:
        "Get visibility into AI usage, requests, and spend across multiple providers in one place.",
    },
    {
      icon: <SameTransactionsUnlockSectionIcon3 />,
      title: "Document management",
      description:
        "Keep invoices and receipts connected to spend, and quickly identify transactions still missing proof.",
    },
  ];

export default function SameTransactionsUnlockSection({
  items = sameTransactionsUnlockSectionIcons,
}: {
  items?: SameTransactionsUnlockSectionIconItemProps[];
}) {
  return (
    <section className="min-w-0 max-md:py-24 md:py-28">
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <Heading className="min-w-0 max-w-2xl">
          {"The same transactions unlock more than matching"}
        </Heading>
        <div className="min-w-0 grid gap-6 mt-12 md:grid-cols-3">
          {items.map((item, index) => (
            <SameTransactionsUnlockSectionIconItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
