import HeroSection from "@/components/saju-detail/hero-section";
import StatsSection from "@/components/saju-detail/stats-section";
import FivePillars from "@/components/saju-detail/five-pillars";
import ChecklistSection from "@/components/saju-detail/checklist-section";
import AnalysisSection from "@/components/saju-detail/analysis-section";
import MonthlyAccordion from "@/components/saju-detail/monthly-accordion";

export default function SajuDetailPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <FivePillars />
      <ChecklistSection />
      <AnalysisSection />
      <MonthlyAccordion />
    </main>
  );
}
