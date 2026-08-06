import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import IntegrationsSectionIcon1 from "../svgs/integrations-section-icon-1";
import IntegrationsSectionIcon2 from "../svgs/integrations-section-icon-2";
import IntegrationsSectionIcon3 from "../svgs/integrations-section-icon-3";
import IntegrationsSectionIcon4 from "../svgs/integrations-section-icon-4";
import IntegrationsSectionIcon5 from "../svgs/integrations-section-icon-5";
import IntegrationsSectionIcon6 from "../svgs/integrations-section-icon-6";
import AiAssistantsMcpSectionIcon2 from "../svgs/ai-assistants-mcp-section-icon-2";

/**
 * @ployComponent
 * @ployComponentId integrations-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from label: Integrations
 */
type IntegrationsSectionIconItemProps = {
  textClassName: string;
  icon: ReactNode;
  text: string;
};

function IntegrationsSectionIconItem({
  textClassName,
  icon,
  text,
}: IntegrationsSectionIconItemProps) {
  return (
    <Card
      variant="interactive"
      className="flex items-center gap-3 origin-[146px_43px] p-5 group"
    >
      <span className={textClassName}>{icon}</span>
      <div>
        <p className="text-ploy-text-secondary font-semibold text-sm min-w-0">
          {text}
        </p>
        <p className="text-[rgb(133,144,168)] text-xs min-w-0">Connected</p>
      </div>
    </Card>
  );
}

export const integrationsSectionIcons: IntegrationsSectionIconItemProps[] = [
  {
    textClassName:
      "bg-red-50 text-red-500 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon1 />,
    text: "Gmail",
  },
  {
    textClassName:
      "bg-violet-50 text-violet-600 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon2 />,
    text: "Slack",
  },
  {
    textClassName:
      "bg-blue-50 text-blue-500 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon3 />,
    text: "Google Workspace",
  },
  {
    textClassName:
      "bg-amber-50 text-amber-600 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon4 />,
    text: "Claude",
  },
  {
    textClassName:
      "bg-emerald-50 text-emerald-600 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon5 />,
    text: "ChatGPT",
  },
  {
    textClassName:
      "bg-green-50 text-green-700 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon6 />,
    text: "QuickBooks",
  },
  {
    textClassName:
      "bg-sky-50 text-sky-600 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon6 />,
    text: "Xero",
  },
  {
    textClassName:
      "bg-indigo-50 text-indigo-600 w-11 h-11 flex justify-center items-center rounded-xl",
    icon: <IntegrationsSectionIcon6 />,
    text: "Plaid",
  },
];

export default function IntegrationsSection({
  items = integrationsSectionIcons,
}: {
  items?: IntegrationsSectionIconItemProps[];
}) {
  return (
    <section
      id="integrations"
      className="min-w-0 relative max-md:py-24 md:py-32 overflow-hidden"
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(246, 247, 249, 0.6), rgb(255, 255, 255))",
        }}
        className="min-w-0 absolute -z-10 inset-0"
      />
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <div className="text-center min-w-0 max-w-2xl mx-auto">
          <p className="text-ploy-accent-primary-700 font-semibold text-sm tracking-wider uppercase min-w-0">
            {"Integrations"}
          </p>
          <Heading align="center" className="min-w-0 mt-3">
            {"Connect the tools you already use"}
          </Heading>
          <p className="text-pretty text-slate-500 text-base min-w-0 mt-4">
            {
              "ClearSpend plugs into your existing tools to detect subscriptions, track renewals, and sync spend data without switching tabs."
            }
          </p>
        </div>
        <div className="min-w-0 grid gap-4 mt-14 grid-cols-2 lg:grid-cols-4 md:max-lg:grid-cols-[repeat(3,minmax(0px,1fr))]">
          {items.map((item, index) => (
            <IntegrationsSectionIconItem key={index} {...item} />
          ))}
        </div>
        <div className="text-center min-w-0 mt-10">
          <a
            href="#"
            className="text-ploy-neutral-inverse-900 font-semibold text-sm min-w-0 inline-flex items-center gap-1.5 group"
            data-ploy-hover-anchor="h5"
          >
            {"Explore all Integrations"}
            <AiAssistantsMcpSectionIcon2 />
          </a>
        </div>
      </div>
    </section>
  );
}
