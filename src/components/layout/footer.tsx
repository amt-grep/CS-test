import NavbarIcon1 from "../svgs/navbar-icon-1";

/**
 * @ployComponent
 * @ployComponentId footer
 * @ployComponentType component
 * @ployComponentPattern footer
 * @ployComponentDescription Site footer with supporting links and information.
 */
type ListItemProps = {
  className: string;
  text: string;
  separator?: string;
};

function ListItem({ className, text, separator }: ListItemProps) {
  return (
    <>
      <li className={className}>
        <a
          href="#"
          className="text-slate-600 text-sm min-w-0 transition-colors hover:text-ploy-neutral-inverse-900"
        >
          {text}
        </a>
      </li>
      {separator}
    </>
  );
}

type ListItem6Props = {
  text: string;
};

function ListItem6({ text }: ListItem6Props) {
  return (
    <a href="#" className="[color:inherit] block hover:text-gray-700">
      {text}
    </a>
  );
}

export const items: ListItemProps[] = [
  { className: "min-w-0", text: "Reconcile" },
  { className: "min-w-0 mt-2.5", text: "See the spend" },
  { className: "min-w-0 mt-2.5", text: "Pricing" },
  { className: "min-w-0 mt-2.5", text: "Integrations" },
];

export const textSegments: ListItemProps[] = [
  { className: "min-w-0", text: "Gmail" },
  { className: "min-w-0 mt-2.5", text: "Slack" },
  { className: "min-w-0 mt-2.5", text: "Google Workspace" },
  { className: "min-w-0 mt-2.5", text: "Claude" },
  { className: "min-w-0 mt-2.5", text: "ChatGPT" },
];

export const textSegments2: ListItemProps[] = [
  { className: "min-w-0", text: "vs. Spreadsheets" },
  { className: "min-w-0 mt-2.5", text: "vs. Accounting tools" },
  { className: "min-w-0 mt-2.5", text: "Why ClearSpend" },
];

export const textSegments3: ListItemProps[] = [
  { className: "min-w-0", text: "Blog" },
  { className: "min-w-0 mt-2.5", text: "Help center" },
  { className: "min-w-0 mt-2.5", text: "API & MCP docs" },
  { className: "min-w-0 mt-2.5", text: "Changelog" },
];

export const textSegments4: ListItemProps[] = [
  { className: "min-w-0", text: "About" },
  { className: "min-w-0 mt-2.5", text: "Careers" },
  { className: "min-w-0 mt-2.5", text: "Contact" },
  { className: "min-w-0 mt-2.5", text: "Security" },
];

export const items6: ListItem6Props[] = [
  { text: "Privacy" },
  { text: "Terms" },
  { text: "Security" },
  { text: "Status" },
];

export default function Footer() {
  return (
    <footer className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-secondary/50 min-w-0 border-t">
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 max-md:py-16 md:px-8 md:py-20">
        <div className="min-w-0 grid gap-12 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div>
            <a
              href="#top"
              className="[color:inherit] min-w-0 flex items-center gap-2"
            >
              <span className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse w-9 h-9 flex justify-center items-center rounded-xl">
                <NavbarIcon1 />
              </span>
              <span className="text-ploy-neutral-inverse-900 font-semibold text-base -tracking-wide block">
                {"ClearSpend"}
              </span>
            </a>
            <p className="text-slate-500 leading-relaxed text-sm min-w-0 max-w-xs mt-4">
              {
                "The spend and subscription management platform for modern organizations. One place for every tool your team pays for."
              }
            </p>
          </div>
          <div>
            <h4 className="text-[rgb(133,144,168)] font-semibold text-xs tracking-wider uppercase min-w-0">
              {"Product"}
            </h4>
            <ul className="min-w-0 mb-0 pl-0">
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < items.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[rgb(133,144,168)] font-semibold text-xs tracking-wider uppercase min-w-0">
              {"Integrations"}
            </h4>
            <ul className="min-w-0 mb-0 pl-0">
              {textSegments.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < textSegments.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[rgb(133,144,168)] font-semibold text-xs tracking-wider uppercase min-w-0">
              {"Compare"}
            </h4>
            <ul className="min-w-0 mb-0 pl-0">
              {textSegments2.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < textSegments2.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[rgb(133,144,168)] font-semibold text-xs tracking-wider uppercase min-w-0">
              {"Resources"}
            </h4>
            <ul className="min-w-0 mb-0 pl-0">
              {textSegments3.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < textSegments3.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[rgb(133,144,168)] font-semibold text-xs tracking-wider uppercase min-w-0">
              {"Company"}
            </h4>
            <ul className="min-w-0 mb-0 pl-0">
              {textSegments4.map((item, index) => (
                <ListItem
                  key={index}
                  {...item}
                  separator={index < textSegments4.length - 1 ? "\n" : ""}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="border-solid border-ploy-neutral-primary-s3 min-w-0 flex justify-between items-center gap-4 mt-14 pt-8 border-t max-md:flex-col md:flex-row">
          <p className="text-[rgb(133,144,168)] text-xs">
            {"© 2026 ClearSpend. All rights reserved."}
          </p>
          <div className="text-[rgb(133,144,168)] text-xs flex gap-5">
            {items6.map((item, index) => (
              <ListItem6 key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
