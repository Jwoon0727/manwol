import DreamHero from "@/components/saju-dream/DreamHero";
import DreamCardGrid from "@/components/saju-dream/DreamCardGrid";
import DreamAccordion60 from "@/components/saju-dream/DreamAccordion60";
import DreamDetailPanel from "@/components/saju-dream/DreamDetailPanel";
import DreamFAQ from "@/components/saju-dream/DreamFAQ";

export default function DreamDetailPage() {
  return (
    <main className="w-full">
      {/* Section 1: Hero */}
      <DreamHero />

      {/* Section 2: 부모 꿈 리스트 */}
      <DreamCardGrid
        sectionLabel="Father &amp; Mother"
        heading="부모"
        sectionKey="parent"
        bg="#ffffff"
      />

      {/* Section 3: 형제 꿈 카드 그리드 (dark) */}
      <DreamCardGrid
        sectionLabel="Siblings"
        heading="형제·자매"
        sectionKey="sibling"
        bg="#1a1a1a"
        dark
      />

      {/* Section 4: 상황별 60선 accordion (dark) */}
      <DreamAccordion60 />

      {/* Section 5: 부모 꿈 상세 해몽 패널 (dark) */}
      <DreamDetailPanel
        sectionLabel="Father & Mother"
        heading="부모 꿈 해몽"
        subheading="엄마·아빠, 돈·집·독립까지"
        description="부모가 나오는 꿈은 실제 엄마·아빠 말고도,내 안의 '어른스러운 나', 권위·안전·경제적인 기반을 상징하는 경우가 많습니다.요즘 내가 가장 부담 느끼는 영역이 어디인지 확인하는 마음으로 읽어보면 도움이 돼요."
        sectionKey="parent"
      />

      {/* Section 6: 친족 꿈 상세 해몽 패널 (light) */}
      <DreamDetailPanel
        sectionLabel="Father & Mother"
        heading="부모 꿈 해몽"
        subheading="엄마·아빠, 돈·집·독립까지"
        description="부모가 나오는 꿈은 실제 엄마·아빠 말고도,내 안의 '어른스러운 나', 권위·안전·경제적인 기반을 상징하는 경우가 많습니다.요즘 내가 가장 부담 느끼는 영역이 어디인지 확인하는 마음으로 읽어보면 도움이 돼요."
        sectionKey="relative"
        dark={false}
      />

      {/* Section 7: FAQ (dark) */}
      <DreamFAQ />
    </main>
  );
}
