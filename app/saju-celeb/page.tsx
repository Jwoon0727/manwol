import HeroSection from "@/components/saju-celeb/HeroSection";
import DaeunTimeline from "@/components/saju-celeb/DaeunTimeline";
import DecisiveMoments from "@/components/saju-celeb/DecisiveMoments";
import SimseongSection from "@/components/saju-celeb/SimseongSection";
import TMISection from "@/components/saju-celeb/TMISection";
import HighlightsSection from "@/components/saju-celeb/HighlightsSection";
import RecentYearsSection from "@/components/saju-celeb/RecentYearsSection";

export default function SajuCelebPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsSection />
      <SimseongSection />
      <DaeunTimeline />
      <DecisiveMoments />

      <RecentYearsSection />
      <TMISection />
    </main>
  );
}
