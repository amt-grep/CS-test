import Navbar from "../layout/navbar";
import HeroSection from "../sections/hero-section";
import BorderInkSection from "../sections/border-ink-section";
import TransactionManagementSection from "../sections/transaction-management-section";
import HowItWorksSection from "../sections/how-it-works-section";
import AIAssistantsMCPSection from "../sections/ai-assistants-mcp-section";
import IntegrationsSection from "../sections/integrations-section";
import SameTransactionsUnlockSection from "../sections/same-transactions-unlock-section";
import FindOutWhatCompanySection from "../sections/find-out-what-company-section";
import CommonQuestionsSection from "../sections/common-questions-section";
import Footer from "../layout/footer";

export default function Page() {
  return (
    <div id="root" className="min-w-0">
      <div className="bg-ploy-background-primary text-ploy-text-secondary min-w-0 min-h-screen">
        <header className="border-solid border-ploy-neutral-primary-s3 bg-ploy-background-primary/80 min-w-0 fixed z-50 backdrop-blur-xl duration-300 ease-in-out border-b top-0 inset-x-0">
          <Navbar />
        </header>
        <main className="min-w-0">
          <HeroSection />
          <BorderInkSection />
          <TransactionManagementSection />
          <HowItWorksSection />
          <AIAssistantsMCPSection />
          <IntegrationsSection />
          <SameTransactionsUnlockSection />
          <FindOutWhatCompanySection />
          <CommonQuestionsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
