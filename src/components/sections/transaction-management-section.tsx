import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import TransactionManagementSectionIcon1 from "../svgs/transaction-management-section-icon-1";
import TransactionManagementSectionIcon2 from "../svgs/transaction-management-section-icon-2";
import TransactionManagementSectionIcon3 from "../svgs/transaction-management-section-icon-3";
import TransactionManagementSectionIcon4 from "../svgs/transaction-management-section-icon-4";

/**
 * @ployComponent
 * @ployComponentId transaction-management-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from label: Transaction management
 */
type TransactionManagementSectionIconItemProps = {
  style_backgroundImage: string;
  icon: ReactNode;
  text: string;
  text_1: string;
  text_2: string;
  text_3: string;
};

function TransactionManagementSectionIconItem({
  style_backgroundImage,
  icon,
  text,
  text_1,
  text_2,
  text_3,
}: TransactionManagementSectionIconItemProps) {
  return (
    <Card
      as="article"
      variant="interactive"
      className="relative group max-md:p-7 md:p-9 overflow-hidden"
      data-ploy-hover-anchor="h2 h3 h4"
    >
      <div
        style={{ backgroundImage: style_backgroundImage }}
        className="w-32 h-32 min-w-0 absolute opacity-[0.08] blur-2xl transition-opacity rounded-full right-0 top-0"
        data-ploy-hover="h2"
      />
      <div className="min-w-0 flex items-center gap-3">
        <span className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse w-11 h-11 flex justify-center items-center shadow-[0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] rounded-xl">
          {icon}
        </span>
        <span className="bg-ploy-background-secondary text-slate-500 font-medium text-xs block shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent)] px-3 py-1 rounded-full">
          {text}
        </span>
      </div>
      <Heading as="h3" variant="card" className="min-w-0 mt-5">
        {text_1}
      </Heading>
      <p className="text-slate-500 leading-relaxed text-sm min-w-0 mt-3">
        {text_2}
      </p>
      <span
        className="text-[rgb(133,144,168)] font-medium text-sm min-w-0 inline-flex items-center gap-1.5 transition-colors mt-6"
        data-ploy-hover="h3"
      >
        <span
          className="bg-[rgb(133,144,168)] w-6 h-px block duration-150 ease-in-out"
          data-ploy-hover="h4"
        />
        {text_3}
      </span>
    </Card>
  );
}

export const transactionManagementSectionIcons: TransactionManagementSectionIconItemProps[] =
  [
    {
      style_backgroundImage:
        "linear-gradient(to right bottom, var(--ploy-accent-primary-400), var(--ploy-accent-primary-700))",
      icon: <TransactionManagementSectionIcon1 />,
      text: "Unified Charges",
      text_1: "All your transactions, in one place",
      text_2:
        "Pull card spend, bank activity, and accounting lines from Xero or QuickBooks into a single transaction feed — across people, accounts, and sources.",
      text_3: "Feature 01",
    },
    {
      style_backgroundImage:
        "linear-gradient(to right bottom, rgb(56, 189, 248), rgb(2, 132, 199))",
      icon: <TransactionManagementSectionIcon2 />,
      text: "Proof Matching",
      text_1: "Match every charge to its proof",
      text_2:
        "ClearSpend pairs bank and card charges with invoices and receipts, then flags what’s missing so you can request the document before review stalls.",
      text_3: "Feature 02",
    },
    {
      style_backgroundImage:
        "linear-gradient(to right bottom, rgb(251, 191, 36), rgb(217, 119, 6))",
      icon: <TransactionManagementSectionIcon3 />,
      text: "Transaction Insights",
      text_1: "Turn spend into decisions",
      text_2:
        "See patterns across vendors, categories, and unmatched activity so Finance can act on what’s rising, what’s missing proof, and what needs a closer look.",
      text_3: "Feature 03",
    },
    {
      style_backgroundImage:
        "linear-gradient(to right bottom, rgb(167, 139, 250), rgb(124, 58, 237))",
      icon: <TransactionManagementSectionIcon4 />,
      text: "Two-way sync",
      text_1: "Connect with Xero and QuickBooks",
      text_2:
        "ClearSpend can import charges from Xero or QuickBooks, and export matched transactions back when you’re ready — so both systems stay aligned without forcing a new workflow.",
      text_3: "Feature 04",
    },
  ];

export default function TransactionManagementSection({
  items = transactionManagementSectionIcons,
}: {
  items?: TransactionManagementSectionIconItemProps[];
}) {
  return (
    <section id="product" className="min-w-0 relative max-md:py-24 md:py-32">
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <div className="text-center min-w-0 max-w-2xl mx-auto">
          <p className="text-ploy-accent-primary-700 font-semibold text-sm tracking-wider uppercase min-w-0">
            {"Transaction management"}
          </p>
          <Heading align="center" className="min-w-0 mt-3">
            {"One system for every charge your company pays"}
          </Heading>
          <p className="text-pretty text-slate-500 text-base min-w-0 mt-4">
            {
              "ClearSpend brings charges and their proof together, so finance teams stop chasing receipts and start reviewing what matters."
            }
          </p>
        </div>
        <div className="min-w-0 grid gap-6 mt-16 lg:grid-cols-2">
          {items.map((item, index) => (
            <TransactionManagementSectionIconItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
