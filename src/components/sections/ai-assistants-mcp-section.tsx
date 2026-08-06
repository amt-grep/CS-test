import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

import AiAssistantsMcpSectionIcon1 from "../svgs/ai-assistants-mcp-section-icon-1";
import AiAssistantsMcpSectionIcon2 from "../svgs/ai-assistants-mcp-section-icon-2";
import AiAssistantsMcpSectionIcon3 from "../svgs/ai-assistants-mcp-section-icon-3";
import AiAssistantsMcpSectionIcon4 from "../svgs/ai-assistants-mcp-section-icon-4";

/**
 * @ployComponent
 * @ployComponentId ai-assistants-mcp-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from label: AI Assistants (MCP)
 */
export default function AIAssistantsMCPSection() {
  return (
    <section className="min-w-0 max-md:py-24 md:py-32">
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <div className="min-w-0 grid items-center lg:grid-cols-2 max-lg:gap-12 lg:gap-16">
          <div>
            <p className="text-ploy-accent-primary-700 font-semibold text-sm tracking-wider uppercase min-w-0">
              {"AI Assistants (MCP)"}
            </p>
            <Heading className="min-w-0 mt-3">
              {"Ask Claude or ChatGPT about your transactions"}
            </Heading>
            <p className="text-pretty text-slate-500 leading-relaxed text-base min-w-0 mt-4">
              {"ClearSpend provides a read-only Model Context Protocol (MCP) server at" +
                " "}
              <code
                style={{
                  fontFamily:
                    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                }}
                className="text-pretty bg-ploy-neutral-primary-s3 text-gray-700 font-medium text-xs min-w-0 px-1.5 py-0.5 rounded-md"
              >
                {" " + "api.clearspend.ai/mcp"}
              </code>
              {
                ", allowing you to connect your AI assistant and query subscriptions, renewals, and spend data in natural language."
              }
            </p>
            <div className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-secondary/50 min-w-0 flex items-center gap-2 mt-6 px-4 py-3 rounded-xl border">
              <AiAssistantsMcpSectionIcon1 />
              <span className="text-slate-600 text-sm block">
                {"OAuth 2.1 authentication — no API keys to manage"}
              </span>
            </div>
            <a
              href="#"
              className="text-ploy-neutral-inverse-900 font-semibold text-sm min-w-0 inline-flex items-center gap-1.5 mt-8 group"
              data-ploy-hover-anchor="h5"
            >
              {"Learn more"}
              <AiAssistantsMcpSectionIcon2 />
            </a>
          </div>
          <div className="relative">
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right bottom, rgba(176, 238, 213, 0.5), rgba(186, 230, 253, 0.4))",
              }}
              className="min-w-0 absolute -z-10 blur-2xl rounded-3xl -inset-4"
            />
            <Card variant="panel" className="min-w-0 overflow-hidden">
              <div className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-secondary/60 min-w-0 flex items-center gap-2 px-4 py-3 border-b">
                <AiAssistantsMcpSectionIcon3 />
                <span className="text-gray-700 font-medium text-sm block">
                  {"Ask ClearSpend"}
                </span>
                <span className="bg-ploy-accent-primary-50 text-ploy-accent-primary-800 font-medium text-xs block ml-auto px-2 py-0.5 rounded-full">
                  {"Connected"}
                </span>
              </div>
              <div className="min-w-0 p-5">
                <div className="min-w-0 flex justify-end">
                  <span className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse text-sm max-w-[80%] block px-4 py-2.5 rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-2xl">
                    {"What subscriptions renewed last month?"}
                  </span>
                </div>
                <div className="min-w-0 flex justify-start mt-4">
                  <span className="bg-ploy-background-secondary text-gray-700 text-sm max-w-[88%] block px-4 py-2.5 rounded-tl-sm rounded-tr-2xl rounded-br-2xl rounded-bl-2xl">
                    {"12 subscriptions renewed in April for a total of" + " "}
                    <span className="font-semibold min-w-0">
                      {" " + "$4,318"}
                    </span>
                    {
                      ". The largest were Figma ($240), AWS ($1,842), and Notion ($96). 3 are missing proof — want me to list them?"
                    }
                  </span>
                </div>
                <div className="min-w-0 flex items-center gap-2 mt-4 pt-1">
                  <div className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-primary text-[rgb(133,144,168)] text-sm grow basis-[0%] px-4 py-2.5 rounded-xl border">
                    {"Ask about your spend…"}
                  </div>
                  <span className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse w-10 h-10 flex justify-center items-center rounded-xl">
                    <AiAssistantsMcpSectionIcon4 />
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
