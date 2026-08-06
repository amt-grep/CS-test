import type { ReactNode } from "react";
import CommonQuestionsSectionIcon1 from "../svgs/common-questions-section-icon-1";
import CommonQuestionsSectionIcon2 from "../svgs/common-questions-section-icon-2";

/**
 * @ployComponent
 * @ployComponentId common-questions-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from label: Common questions
 */
type CommonQuestionsSectionIconItemProps = {
  className: string;
  title: string;
  icon: ReactNode;
  containerClassName: string;
  description: string;
};

function CommonQuestionsSectionIconItem({
  className,
  title,
  icon,
  containerClassName,
  description,
}: CommonQuestionsSectionIconItemProps) {
  return (
    <div className={className}>
      <button
        style={{ fontVariationSettings: "inherit" }}
        className="[color:inherit] [font-weight:inherit] text-[100%] text-left w-full min-w-0 flex justify-between items-center gap-4 cursor-pointer px-0 py-5"
      >
        <span className="text-ploy-text-secondary font-medium block max-md:text-sm md:text-base">
          {title}
        </span>
        <span className="border-solid border-ploy-border-primary text-slate-500 w-7 h-7 flex shrink-0 justify-center items-center rounded-full border">
          {icon}
        </span>
      </button>
      <div className={containerClassName}>
        <div className="overflow-hidden">
          <p className="text-slate-500 leading-relaxed text-sm min-w-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export const commonQuestionsSectionIcons: CommonQuestionsSectionIconItemProps[] =
  [
    {
      className: "min-w-0",
      title: "What data does ClearSpend access?",
      icon: <CommonQuestionsSectionIcon1 />,
      containerClassName:
        "min-w-0 grid grid-rows-[1fr] duration-300 ease-in-out pb-5",
      description:
        "ClearSpend only reads the documents and transactions you connect — Gmail, Google Drive, card statements, Plaid, Xero, or QuickBooks. It never modifies your source data and uses read-only connections wherever possible.",
    },
    {
      className: "border-solid border-ploy-neutral-primary-s3 min-w-0 border-t",
      title: "Is it safe to connect my card?",
      icon: <CommonQuestionsSectionIcon2 />,
      containerClassName:
        "min-w-0 grid grid-rows-[0fr] duration-300 ease-in-out",
      description:
        "Yes. Card connections go through Plaid, a provider used by thousands of fintech apps. ClearSpend never stores raw card numbers — it only receives transaction metadata needed for matching.",
    },
    {
      className: "border-solid border-ploy-neutral-primary-s3 min-w-0 border-t",
      title: "How quickly can I see results?",
      icon: <CommonQuestionsSectionIcon2 />,
      containerClassName:
        "min-w-0 grid grid-rows-[0fr] duration-300 ease-in-out",
      description:
        "Most teams see their first matched transactions within minutes of connecting a statement and a document source. The more sources you connect, the higher the match rate climbs.",
    },
    {
      className: "border-solid border-ploy-neutral-primary-s3 min-w-0 border-t",
      title: "Do I need to involve IT or engineering?",
      icon: <CommonQuestionsSectionIcon2 />,
      containerClassName:
        "min-w-0 grid grid-rows-[0fr] duration-300 ease-in-out",
      description:
        "No. ClearSpend is designed for finance and operations teams. Connections use standard OAuth and Plaid flows — no code, no IT tickets.",
    },
    {
      className: "border-solid border-ploy-neutral-primary-s3 min-w-0 border-t",
      title:
        "How is ClearSpend different from spreadsheets or accounting tools?",
      icon: <CommonQuestionsSectionIcon2 />,
      containerClassName:
        "min-w-0 grid grid-rows-[0fr] duration-300 ease-in-out",
      description:
        "Spreadsheets require manual entry and matching. Accounting tools track charges but not the proof. ClearSpend sits between them — pulling charges in, attaching the matching proof, and exporting back to your accounting system when ready.",
    },
    {
      className: "border-solid border-ploy-neutral-primary-s3 min-w-0 border-t",
      title: "What problem does ClearSpend solve?",
      icon: <CommonQuestionsSectionIcon2 />,
      containerClassName:
        "min-w-0 grid grid-rows-[0fr] duration-300 ease-in-out",
      description:
        "The endless back-and-forth of “who has the receipt for this charge?” ClearSpend automatically pairs each charge with its supporting document and surfaces only the handful that still need attention.",
    },
  ];

export default function CommonQuestionsSection({
  items = commonQuestionsSectionIcons,
}: {
  items?: CommonQuestionsSectionIconItemProps[];
}) {
  return (
    <section id="resources" className="min-w-0 max-md:py-24 md:py-32">
      <div className="min-w-0 max-w-screen-md mx-auto max-md:px-5 md:px-8">
        <div className="text-center min-w-0">
          <p className="text-ploy-accent-primary-700 font-semibold text-sm tracking-wider uppercase min-w-0">
            {"Common questions"}
          </p>
          <h2 className="text-balance text-ploy-neutral-inverse-900 font-semibold -tracking-wide min-w-0 mt-3 max-md:text-3xl md:text-4xl">
            {"Things people ask before signing up"}
          </h2>
        </div>
        <div className="border-solid border-ploy-neutral-primary-s3 min-w-0 mt-12 border-t border-b">
          {items.map((item, index) => (
            <CommonQuestionsSectionIconItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
