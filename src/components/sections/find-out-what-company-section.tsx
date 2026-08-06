import HeroSectionIcon1 from "../svgs/hero-section-icon-1";

/**
 * @ployComponent
 * @ployComponentId find-out-what-company-section
 * @ployComponentType section
 * @ployComponentPattern section
 * @ployComponentDescription Deterministic section inferred from heading: Find out what your company is actually paying for. It only takes 2 minutes.
 */
export default function FindOutWhatCompanySection() {
  return (
    <section
      id="pricing"
      className="min-w-0 relative max-md:py-24 md:py-32 overflow-hidden"
    >
      <div className="min-w-0 max-w-screen-xl mx-auto max-md:px-5 md:px-8">
        <div className="bg-ploy-neutral-inverse-900 text-center min-w-0 relative rounded-3xl max-md:px-6 max-md:py-16 md:px-16 md:py-20 overflow-hidden">
          <div className="min-w-0 absolute -z-10 inset-0">
            <div className="bg-ploy-background-accent-primary/30 w-[37.5rem] h-72 min-w-0 absolute top-[-30%] blur-3xl -translate-x-2/4 rounded-full left-2/4" />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--ploy-background-primary) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(var(--ploy-background-primary) 1px, rgba(0, 0, 0, 0) 1px)",
                backgroundSize: "48px 48px, 48px 48px",
                backgroundRepeat: "repeat, repeat",
                backgroundClip: "border-box, border-box",
                backgroundOrigin: "padding-box, padding-box",
              }}
              className="min-w-0 absolute opacity-[0.07] inset-0"
            />
          </div>
          <h2 className="text-balance text-ploy-text-inverse font-semibold -tracking-wide min-w-0 max-w-2xl mx-auto max-md:text-3xl md:text-4xl">
            {
              "Find out what your company is actually paying for. It only takes 2 minutes."
            }
          </h2>
          <p className="text-[rgb(176,183,198)] text-sm min-w-0 mt-4">
            {"7-day free trial. No credit card required."}
          </p>
          <div className="min-w-0 flex justify-center items-center gap-3 mt-8 max-md:flex-col md:flex-row">
            <a
              href="#"
              className="bg-white text-ploy-neutral-inverse-900 font-semibold text-sm flex justify-center items-center gap-2 shadow-[0px_1px_2px_0px_rgba(15,17,24,0.04),0px_8px_24px_0px_rgba(15,17,24,0.06)] duration-150 ease-in-out px-6 py-3.5 rounded-xl group hover:bg-[rgb(236_238_242_/_1)] max-md:w-full"
              data-ploy-hover-anchor="h1"
              data-ploy-component-type="button"
              data-ploy-component-variant="primary"
            >
              {"Start for Free"}
              <HeroSectionIcon1 />
            </a>
            <a
              href="#how-it-works"
              className="border-solid border-ploy-button-secondary-border/20 text-ploy-button-secondary-text font-semibold text-sm flex justify-center items-center gap-2 transition-colors px-6 py-3.5 rounded-xl hover:bg-[rgba(255,255,255,0.1)] max-md:w-full border"
              data-ploy-component-type="button"
              data-ploy-component-variant="outline"
            >
              {"See a live demo"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
