import { Button } from "@/components/ui/button";

import NavbarIcon1 from "../svgs/navbar-icon-1";
import NavbarIcon2 from "../svgs/navbar-icon-2";

/**
 * @ployComponent
 * @ployComponentId navbar
 * @ployComponentType component
 * @ployComponentPattern navbar
 * @ployComponentDescription Main navigation for the website.
 * @ployComponentStatus stable
 */
type LinkItemProps = {
  href: string;
  text: string;
};

function LinkItem({ href, text }: LinkItemProps) {
  return (
    <a
      href={href}
      className="text-slate-600 font-medium text-sm block transition-colors px-3.5 py-2 rounded-lg hover:bg-ploy-background-secondary hover:text-ploy-neutral-inverse-900"
    >
      {text}
    </a>
  );
}

export const links: LinkItemProps[] = [
  { href: "#product", text: "Product" },
  { href: "#how-it-works", text: "How it works" },
  { href: "#integrations", text: "Integrations" },
  { href: "#pricing", text: "Pricing" },
  { href: "#resources", text: "Resources" },
];

export default function Navbar({ items = links }: { items?: LinkItemProps[] }) {
  return (
    <nav className="h-16 min-w-0 max-w-screen-xl flex justify-between items-center mx-auto max-md:px-5 md:px-8">
      <a href="#top" className="[color:inherit] flex items-center gap-2">
        <span className="bg-ploy-neutral-inverse-900 text-ploy-text-inverse w-9 h-9 flex justify-center items-center rounded-xl">
          <NavbarIcon1 />
        </span>
        <span className="text-ploy-neutral-inverse-900 font-semibold text-base -tracking-wide block">
          {"ClearSpend"}
        </span>
      </a>
      <div className="items-center gap-1 min-[768px]:flex max-md:min-w-0 max-md:hidden md:min-w-[auto]">
        {items.map((item, index) => (
          <LinkItem key={index} {...item} />
        ))}
      </div>
      <div className="items-center gap-2 min-[768px]:flex max-md:min-w-0 max-md:hidden md:min-w-[auto]">
        <a
          href="#"
          className="text-slate-600 font-medium text-sm block transition-colors px-3.5 py-2 rounded-lg hover:text-ploy-neutral-inverse-900"
        >
          {"Sign In"}
        </a>
        <Button asChild size="nav">
          <a
            href="#"
            data-ploy-component-type="button"
            data-ploy-component-variant="secondary"
          >
            {"Start for Free"}
          </a>
        </Button>
      </div>
      <button
        aria-label="Toggle menu"
        style={{ fontVariationSettings: "inherit" }}
        className="text-gray-700 [font-weight:inherit] text-[100%] w-10 h-10 min-w-0 justify-center items-center cursor-pointer p-0 rounded-lg min-[768px]:hidden hover:bg-ploy-background-secondary max-md:flex md:hidden"
      >
        <NavbarIcon2 />
      </button>
    </nav>
  );
}
