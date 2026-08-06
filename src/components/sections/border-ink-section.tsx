/**
 * @ployComponent
 * @ployComponentId border-ink-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from semantic markup
 */
type ListItemProps = {
  text: string;
  separator?: string;
};

function ListItem({ text, separator }: ListItemProps) {
  return (
    <>
      <span className="text-nowrap text-[rgb(176,183,198)] font-semibold text-lg whitespace-nowrap block">
        {text}
      </span>
      {separator}
    </>
  );
}

export const borderInkSection: ListItemProps[] = [
  { text: "Gmail" },
  { text: "Slack" },
  { text: "Google Workspace" },
  { text: "Claude" },
  { text: "ChatGPT" },
  { text: "QuickBooks" },
  { text: "Xero" },
  { text: "Plaid" },
  { text: "Gmail" },
  { text: "Slack" },
  { text: "Google Workspace" },
  { text: "Claude" },
  { text: "ChatGPT" },
  { text: "QuickBooks" },
  { text: "Xero" },
  { text: "Plaid" },
];

export default function BorderInkSection({
  items = borderInkSection,
}: {
  items?: ListItemProps[];
}) {
  return (
    <section className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-primary min-w-0 py-10 border-t border-b text-ploy-text-primary">
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <p className="text-[rgb(133,144,168)] font-medium text-xs tracking-wider uppercase text-center min-w-0">
          {"Works with the tools your team already uses"}
        </p>
        <div className="min-w-0 relative mt-6 overflow-hidden">
          <div
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--ploy-background-primary), rgba(0, 0, 0, 0))",
            }}
            className="pointer-events-none w-16 min-w-0 absolute z-10 left-0 inset-y-0"
          />
          <div
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to left, var(--ploy-background-primary), rgba(0, 0, 0, 0))",
            }}
            className="pointer-events-none w-16 min-w-0 absolute z-10 right-0 inset-y-0"
          />
          <div
            style={{
              animationName: "marquee",
              animationDuration: "32s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
            className="w-max min-w-0 flex items-center gap-12 translate-x-[-14.7391%]"
          >
            {items.map((item, index) => (
              <ListItem
                key={index}
                {...item}
                separator={index < items.length - 1 ? " " : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
