import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import HeroSectionIcon1 from "../svgs/hero-section-icon-1";
import HeroSectionIcon2 from "../svgs/hero-section-icon-2";
import HeroSectionIcon3 from "../svgs/hero-section-icon-3";

/**
 * @ployComponent
 * @ployComponentId hero-section
 * @ployComponentType section
 * @ployComponentPattern hero
 * @ployComponentDescription Deterministic hero section inferred from first meaningful content block
 * @ployComponentStatus stable
 */
type ListItemProps = {
  style_backgroundImage: string;
  style_backgroundSize: string;
  style_backgroundRepeat: string;
  style_mask: string;
  style_maskImage: string;
  style_backgroundClip: string;
  style_backgroundOrigin: string;
  className: string;
};

function ListItem({
  style_backgroundImage,
  style_backgroundSize,
  style_backgroundRepeat,
  style_mask,
  style_maskImage,
  style_backgroundClip,
  style_backgroundOrigin,
  className,
}: ListItemProps) {
  return (
    <div
      style={{
        backgroundImage: style_backgroundImage || undefined,
        backgroundSize: style_backgroundSize || undefined,
        backgroundRepeat: style_backgroundRepeat || undefined,
        mask: style_mask || undefined,
        maskImage: style_maskImage || undefined,
        backgroundClip: style_backgroundClip || undefined,
        backgroundOrigin: style_backgroundOrigin || undefined,
      }}
      className={className}
    />
  );
}

type ListItem2Props = {
  className: string;
};

function ListItem2({ className }: ListItem2Props) {
  return <span className={className} />;
}

type ListItem3Props = {
  className: string;
  text: string;
  separator?: string;
};

function ListItem3({ className, text, separator }: ListItem3Props) {
  return (
    <>
      <span className={className}>{text}</span>
      {separator}
    </>
  );
}

type ListItem4Props = {
  className: string;
  text: string;
};

function ListItem4({ className, text }: ListItem4Props) {
  return <p className={className}>{text}</p>;
}

type ListItem5Props = {
  text: string;
  descriptionClassName: string;
  text_1: string;
};

function ListItem5({ text, descriptionClassName, text_1 }: ListItem5Props) {
  return (
    <div className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-primary p-3 rounded-xl border text-ploy-text-primary">
      <p className="text-[rgb(133,144,168)] text-xs min-w-0">{text}</p>
      <p className={descriptionClassName}>{text_1}</p>
    </div>
  );
}

type ListItem6Props = {
  className: string;
  text: string;
  text_1: string;
  text_2: string;
  text_3: string;
  textClassName: string;
  text_4: string;
};

function ListItem6({
  className,
  text,
  text_1,
  text_2,
  text_3,
  textClassName,
  text_4,
}: ListItem6Props) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2.5 col-start-[span_5] col-end-[span_5]">
        <span className="bg-ploy-neutral-primary-s2 text-slate-600 leading-5 font-bold text-xs w-7 h-7 flex justify-center items-center rounded-md">
          {text}
        </span>
        <span className="text-ploy-text-secondary font-medium block">
          {text_1}
        </span>
      </div>
      <div className="text-nowrap text-slate-500 text-xs whitespace-nowrap col-start-[span_3] col-end-[span_3] min-[640px]:block max-md:min-w-0 max-md:hidden md:min-w-[auto] overflow-hidden">
        {text_2}
      </div>
      <div className="text-gray-700 font-medium text-right col-start-[span_2] col-end-[span_2]">
        {text_3}
      </div>
      <div className="flex justify-end col-start-[span_2] col-end-[span_2]">
        <span className={textClassName}>{text_4}</span>
      </div>
    </div>
  );
}

type ListItem7Props = {
  className: string;
  text: string;
};

function ListItem7({ className, text }: ListItem7Props) {
  return <div className={className}>{text}</div>;
}

export const items: ListItemProps[] = [
  {
    style_backgroundImage:
      "linear-gradient(rgba(238, 252, 246, 0.6), rgb(255, 255, 255), rgb(255, 255, 255))",
    style_backgroundSize: "",
    style_backgroundRepeat: "",
    style_mask: "",
    style_maskImage: "",
    style_backgroundClip: "",
    style_backgroundOrigin: "",
    className: "min-w-0 absolute inset-0",
  },
  {
    style_backgroundImage: "",
    style_backgroundSize: "",
    style_backgroundRepeat: "",
    style_mask: "",
    style_maskImage: "",
    style_backgroundClip: "",
    style_backgroundOrigin: "",
    className:
      "bg-ploy-accent-primary-200/30 w-[51.25rem] h-[30rem] min-w-0 absolute top-[-10%] blur-3xl -translate-x-2/4 rounded-full left-2/4",
  },
  {
    style_backgroundImage:
      "linear-gradient(to right, var(--ploy-accent-secondary-200) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(var(--ploy-accent-secondary-200) 1px, rgba(0, 0, 0, 0) 1px)",
    style_backgroundSize: "56px 56px, 56px 56px",
    style_backgroundRepeat: "repeat, repeat",
    style_mask:
      "radial-gradient(80% 60% at 50% 0%, var(--ploy-background-inverse) 30%, rgba(0, 0, 0, 0) 75%)",
    style_maskImage:
      "radial-gradient(80% 60% at 50% 0%, var(--ploy-background-inverse) 30%, rgba(0, 0, 0, 0) 75%)",
    style_backgroundClip: "border-box, border-box",
    style_backgroundOrigin: "padding-box, padding-box",
    className: "min-w-0 absolute opacity-[0.18] inset-0",
  },
];

export const items2: ListItem2Props[] = [
  { className: "bg-red-300 w-3 h-3 block rounded-full" },
  { className: "bg-amber-300 w-3 h-3 block rounded-full" },
  { className: "bg-green-300 w-3 h-3 block rounded-full" },
];

export const textSegments: ListItem3Props[] = [
  {
    className:
      "bg-ploy-background-primary text-ploy-neutral-inverse-900 font-medium block shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] px-3 py-2 rounded-lg",
    text: "Transactions",
  },
  {
    className: "text-slate-500 block px-3 py-2 rounded-lg",
    text: "Subscriptions",
  },
  { className: "text-slate-500 block px-3 py-2 rounded-lg", text: "Documents" },
  { className: "text-slate-500 block px-3 py-2 rounded-lg", text: "Insights" },
  {
    className: "text-slate-500 block px-3 py-2 rounded-lg",
    text: "Integrations",
  },
];

export const textSegments2: ListItem4Props[] = [
  { className: "font-medium text-xs min-w-0 opacity-90", text: "This month" },
  { className: "font-semibold text-xl min-w-0 mt-1", text: "$28,402" },
  { className: "text-xs min-w-0 opacity-80 mt-0.5", text: "92% matched" },
];

export const items5: ListItem5Props[] = [
  {
    text: "Matched",
    descriptionClassName:
      "text-ploy-accent-primary-800 font-semibold text-xl min-w-0 mt-1",
    text_1: "131",
  },
  {
    text: "Missing proof",
    descriptionClassName: "text-red-600 font-semibold text-xl min-w-0 mt-1",
    text_1: "7",
  },
  {
    text: "Needs review",
    descriptionClassName: "text-amber-600 font-semibold text-xl min-w-0 mt-1",
    text_1: "4",
  },
];

export const textSegments3: ListItem6Props[] = [
  {
    className:
      "border-solid border-ploy-neutral-primary-s2 text-sm min-w-0 grid items-center grid-cols-[repeat(12,minmax(0px,1fr))] px-4 py-3 border-b hover:bg-ploy-background-secondary/40",
    text: "FI",
    text_1: "Figma",
    text_2: "Invoice #INV-2041",
    text_3: "$240.00",
    textClassName:
      "bg-ploy-accent-primary-50 text-ploy-accent-primary-800 leading-5 font-medium text-xs block shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_rgb(176,238,213)] px-2.5 py-1 rounded-full",
    text_4: "Matched",
  },
  {
    className:
      "border-solid border-ploy-neutral-primary-s2 text-sm min-w-0 grid items-center grid-cols-[repeat(12,minmax(0px,1fr))] px-4 py-3 border-b hover:bg-ploy-background-secondary/40",
    text: "AW",
    text_1: "AWS",
    text_2: "Receipt · Apr",
    text_3: "$1,842.30",
    textClassName:
      "bg-ploy-accent-primary-50 text-ploy-accent-primary-800 leading-5 font-medium text-xs block shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_rgb(176,238,213)] px-2.5 py-1 rounded-full",
    text_4: "Matched",
  },
  {
    className:
      "border-solid border-ploy-neutral-primary-s2 text-sm min-w-0 grid items-center grid-cols-[repeat(12,minmax(0px,1fr))] px-4 py-3 border-b hover:bg-ploy-background-secondary/40",
    text: "NO",
    text_1: "Notion Labs",
    text_2: "—",
    text_3: "$96.00",
    textClassName:
      "bg-red-50 text-red-600 leading-5 font-medium text-xs block shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_rgb(254,202,202)] px-2.5 py-1 rounded-full",
    text_4: "Missing",
  },
  {
    className:
      "border-solid border-ploy-neutral-primary-s2 text-sm min-w-0 grid items-center grid-cols-[repeat(12,minmax(0px,1fr))] px-4 py-3 border-b hover:bg-ploy-background-secondary/40",
    text: "SL",
    text_1: "Slack",
    text_2: "Invoice #SL-882",
    text_3: "$72.00",
    textClassName:
      "bg-ploy-accent-primary-50 text-ploy-accent-primary-800 leading-5 font-medium text-xs block shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_rgb(176,238,213)] px-2.5 py-1 rounded-full",
    text_4: "Matched",
  },
  {
    className:
      "text-sm min-w-0 grid items-center grid-cols-[repeat(12,minmax(0px,1fr))] px-4 py-3 hover:bg-ploy-background-secondary/40",
    text: "LI",
    text_1: "Linear",
    text_2: "2 candidates",
    text_3: "$48.00",
    textClassName:
      "bg-amber-50 text-amber-700 leading-5 font-medium text-xs block shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_rgb(253,230,138)] px-2.5 py-1 rounded-full",
    text_4: "Review",
  },
];

export const textSegments4: ListItem7Props[] = [
  {
    className: "uppercase col-start-[span_5] col-end-[span_5]",
    text: "Vendor",
  },
  {
    className:
      "uppercase col-start-[span_3] col-end-[span_3] min-[640px]:block max-md:min-w-0 max-md:hidden md:min-w-[auto]",
    text: "Proof",
  },
  {
    className: "uppercase text-right col-start-[span_2] col-end-[span_2]",
    text: "Amount",
  },
  {
    className: "uppercase text-right col-start-[span_2] col-end-[span_2]",
    text: "Status",
  },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="min-w-0 relative max-md:pt-28 md:pt-32 overflow-hidden"
    >
      <div className="min-w-0 absolute -z-10 inset-0">
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <div className="text-center min-w-0 max-w-screen-md mx-auto">
          <div
            data-ploy-animation-fx-hint="fade-in"
            style={{
              animationName: "fade-up",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationFillMode: "both",
            }}
            className="border-solid border-ploy-accent-primary-200 bg-ploy-accent-primary-50 text-ploy-accent-primary-800 font-medium text-xs min-w-0 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border"
          >
            <span className="bg-ploy-background-accent-primary w-1.5 h-1.5 flex rounded-full" />
            {" Now with AI assistant integration"}
          </div>
          <Heading
            as="h1"
            variant="hero"
            align="center"
            data-ploy-animation-fx-hint="fade-in"
            style={{
              animationName: "fade-up",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationDelay: "0.06s",
              animationFillMode: "both",
            }}
            className="min-w-0 mt-6"
          >
            {"Every transaction. Matched to its proof."}
          </Heading>
          <p
            data-ploy-animation-fx-hint="fade-in"
            style={{
              animationName: "fade-up",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationDelay: "0.12s",
              animationFillMode: "both",
            }}
            className="text-pretty text-slate-500 min-w-0 max-w-xl mt-6 mx-auto max-md:leading-relaxed max-md:text-base md:text-lg"
          >
            {
              "ClearSpend reads the invoices and receipts already sitting in your Gmail and Drive, connects each one to the charge it belongs to, and gives your team a short list of what is still missing."
            }
          </p>
          <div
            data-ploy-animation-fx-hint="fade-in"
            style={{
              animationName: "fade-up",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationDelay: "0.18s",
              animationFillMode: "both",
            }}
            className="min-w-0 flex justify-center items-center gap-3 mt-8 max-md:flex-col md:flex-row"
          >
            <Button asChild responsive="mobile-full" className="group">
              <a
                href="#"
                data-ploy-hover-anchor="h1"
                data-ploy-component-type="button"
                data-ploy-component-variant="secondary"
              >
                {"Start for Free"}
                <HeroSectionIcon1 />
              </a>
            </Button>
            <Button asChild variant="outline" responsive="mobile-full">
              <a
                href="#how-it-works"
                data-ploy-component-type="button"
                data-ploy-component-variant="outline"
              >
                <HeroSectionIcon2 />
                {"See a Live Demo"}
              </a>
            </Button>
          </div>
          <p
            data-ploy-animation-fx-hint="fade-in"
            style={{
              animationName: "fade-up",
              animationDuration: "0.7s",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationDelay: "0.24s",
              animationFillMode: "both",
            }}
            className="text-[rgb(133,144,168)] text-xs min-w-0 mt-4"
          >
            <HeroSectionIcon3 />
            {"7-day free trial. No credit card required."}
          </p>
        </div>
        <div
          data-ploy-animation-fx-hint="fade-in"
          style={{
            animationName: "fade-up",
            animationDuration: "0.7s",
            animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            animationDelay: "0.3s",
            animationFillMode: "both",
          }}
          className="min-w-0 max-md:mt-16 md:mt-20"
        >
          <div className="min-w-0 max-w-screen-lg relative mx-auto">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(rgba(176, 238, 213, 0.4), rgba(0, 0, 0, 0))",
              }}
              className="min-w-0 absolute -z-10 blur-2xl rounded-[1.75rem] -top-6 bottom-0 -inset-x-6"
            />
            <div className="border-solid border-ploy-neutral-primary-s4/70 bg-ploy-background-primary min-w-0 shadow-[0px_1px_3px_0px_rgba(15,17,24,0.05),0px_12px_40px_0px_rgba(15,17,24,0.08)] shadow-card max-md:rounded-2xl md:rounded-[1.25rem] overflow-hidden border text-ploy-text-primary">
              <div className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-secondary/60 min-w-0 flex items-center gap-2 px-4 py-3 border-b">
                {items2.map((item, index) => (
                  <ListItem2 key={index} {...item} />
                ))}
                <div className="grow basis-[0%] ml-3 min-[640px]:block max-md:min-w-0 max-md:hidden md:min-w-[auto]">
                  <div className="text-nowrap bg-ploy-background-primary text-[rgb(133,144,168)] text-xs text-center whitespace-nowrap min-w-0 max-w-md shadow-[0px_0px_0px_0px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent),0px_0px_0px_1px_color-mix(in_srgb,var(--ploy-neutral-primary)_100%,transparent)] mx-auto px-3 py-1 rounded-md overflow-hidden">
                    {"app.clearspend.ai/transactions"}
                  </div>
                </div>
              </div>
              <div className="min-w-0 grid grid-cols-[repeat(12,minmax(0px,1fr))]">
                <aside className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-secondary/40 col-start-[span_3] col-end-[span_3] p-4 border-r min-[1024px]:block max-lg:min-w-0 max-lg:hidden lg:min-w-[auto]">
                  <div className="min-w-0 flex items-center gap-2 px-1">
                    <span className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse font-bold text-xs w-7 h-7 flex justify-center items-center rounded-lg">
                      {"CS"}
                    </span>
                    <span className="text-gray-700 font-semibold text-sm block">
                      {"ClearSpend"}
                    </span>
                  </div>
                  <nav className="text-sm min-w-0 flex flex-col gap-1 mt-6">
                    {textSegments.map((item, index) => (
                      <ListItem3
                        key={index}
                        {...item}
                        separator={index < textSegments.length - 1 ? " " : ""}
                      />
                    ))}
                  </nav>
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to right bottom, var(--ploy-accent-primary-500), var(--ploy-accent-primary-800))",
                    }}
                    className="text-ploy-text-inverse min-w-0 mt-6 p-4 rounded-xl"
                  >
                    {textSegments2.map((item, index) => (
                      <ListItem4 key={index} {...item} />
                    ))}
                  </div>
                </aside>
                <div className="max-md:p-5 max-lg:col-start-[span_12] max-lg:col-end-[span_12] md:p-6 lg:col-start-[span_9] lg:col-end-[span_9]">
                  <div className="min-w-0 flex justify-between items-center">
                    <div>
                      <h3 className="text-ploy-neutral-inverse-900 font-semibold text-base min-w-0">
                        {"Transactions"}
                      </h3>
                      <p className="text-[rgb(133,144,168)] text-xs min-w-0">
                        {"April 2026 · 142 charges"}
                      </p>
                    </div>
                    <div className="gap-2 min-[640px]:flex max-md:min-w-0 max-md:hidden md:min-w-[auto]">
                      <span className="border-solid border-ploy-border-primary text-slate-600 font-medium text-xs block px-3 py-1.5 rounded-lg border">
                        {"Filter"}
                      </span>
                      <span className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse font-medium text-xs block px-3 py-1.5 rounded-lg">
                        {"Export"}
                      </span>
                    </div>
                  </div>
                  <div className="min-w-0 grid gap-3 grid-cols-[repeat(3,minmax(0px,1fr))] mt-4">
                    {items5.map((item, index) => (
                      <ListItem5 key={index} {...item} />
                    ))}
                  </div>
                  <div className="border-solid border-ploy-neutral-primary-s3 min-w-0 mt-4 rounded-xl overflow-hidden border">
                    <div className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-secondary/50 text-[rgb(133,144,168)] font-medium text-xs tracking-wide uppercase min-w-0 grid grid-cols-[repeat(12,minmax(0px,1fr))] px-4 py-2.5 border-b">
                      {textSegments4.map((item, index) => (
                        <ListItem7 key={index} {...item} />
                      ))}
                    </div>
                    {textSegments3.map((item, index) => (
                      <ListItem6 key={index} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
