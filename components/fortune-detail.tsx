"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Navbar from "./navbar";
import { ChevronLeft, ChevronDown, Flower2 } from "lucide-react";
import FortuneForm from "./fortune-form";
import FortuneResult from "./fortune-result";

const fortuneData: Record<
  string,
  {
    title: string;
    character: string;
    character2?: string;
    character3: string;
    greeting: string;
    inputPlaceholder: string;
    situationCharacter: string;
    situationCharacter2: string;
    situationGreeting: string;
    situationPlaceholder: string;
  }
> = {
  "1": {
    title: "만월공자 신년운세",
    character: "/main/sajudetail/fortune-detail-1.png",
    character2: "/main/sajudetail/fortune-detail-1-2.png",
    character3: "/main/sajudetail/fortune-detail-1-3.png",
    greeting:
      "어서 오세요.\n당신의 신년운세를 봐드릴 만월입니다.\n우선 성함과 생년월일을 말씀해주세요.",
    inputPlaceholder: "내 이름은..",
    situationCharacter: "/main/sajudetail/fortune-detail-1-4.png",
    situationCharacter2: "/main/sajudetail/fortune-detail-1-3.png",
    situationGreeting:
      "음.. 좋습니다.\n더 자세한 확인을 위해\n현재 당신의 상황을 알려주시겠어요?",
    situationPlaceholder: "지금 나의 상황은..",
  },
  "2": {
    title: "선화소자 연애비책",
    character: "/main/sajudetail/fortune-detail-2-1.png",
    character3: "/main/sajudetail/fortune-detail-1-3.png",
    greeting:
      "어서 오세요.\n운명의 인연을 찾아드릴 선화입니다.\n우선 성함과 생년월일을 알려주세요.",
    inputPlaceholder: "내 이름은..",
    situationCharacter: "/main/sajudetail/fortune-detail-2-2.png",
    situationCharacter2: "/main/sajudetail/fortune-detail-1-3.png",
    situationGreeting:
      "흠.. 좋아요.\n더 정확히 봐드리기 위해\n지금 연애 상황을 알려주시겠어요?",
    situationPlaceholder: "지금 나의 연애는..",
  },
  "3": {
    title: "만월공자 사주풀이",
    character: "/main/sajudetail/fortune-detail-4.png",
    character3: "/main/sajudetail/fortune-detail-1-3.png",
    greeting:
      "어서 오세요.\n사주를 풀어드릴 만월입니다.\n성함과 생년월일을 말씀해주세요.",
    inputPlaceholder: "내 이름은..",
    situationCharacter: "/main/sajudetail/fortune-detail-4-1.png",
    situationCharacter2: "/main/sajudetail/fortune-detail-1-3.png",
    situationGreeting:
      "감사합니다.\n당신의 사주를 더 자세히 보기 위해\n어떤 사람인지 알려주시겠어요?",
    situationPlaceholder: "지금 나의 상황은..",
  },
  "4": {
    title: "명천도령 재물보감",
    character: "/main/sajudetail/fortune-detail-3.png",
    character3: "/main/sajudetail/fortune-detail-1-3.png",
    greeting:
      "어서 오세요.\n재물운을 살펴드릴 명천입니다.\n성함과 생년월일을 말씀해주세요.",
    inputPlaceholder: "내 이름은..",
    situationCharacter: "/main/sajudetail/fortune-detail-03.png",
    situationCharacter2: "/main/sajudetail/fortune-detail-1-3.png",
    situationGreeting:
      "감사합니다.\n그분과의 인연을 더 자세히 보기 위해\n어떤 관계인지 알려주시겠어요?",
    situationPlaceholder: "지금 나의 상황은..",
  },
};

interface Props {
  id: string;
}

type Step = "intro" | "form" | "situation" | "result";

export default function FortuneDetail({ id }: Props) {
  const data = fortuneData[id] ?? fortuneData["1"];
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const stepParam = searchParams.get("step");
  const step: Step =
    stepParam === "form" || stepParam === "situation" || stepParam === "result"
      ? stepParam
      : "intro";

  const setStep = (newStep: Step) => {
    if (newStep === "intro") {
      router.replace(pathname);
    } else {
      const params = new URLSearchParams(searchParams.toString());
      params.set("step", newStep);
      router.replace(`${pathname}?${params.toString()}`);
    }
  };

  if (step === "form") {
    return (
      <FortuneForm
        id={id}
        character={data.character}
        character2={data.character2}
        title={data.title}
        onBack={() => setStep("intro")}
        onSubmit={() => setStep("situation")}
      />
    );
  }

  if (step === "situation") {
    return (
      <SituationStep
        data={data}
        onBack={() => setStep("form")}
        onNext={() => setStep("result")}
      />
    );
  }

  if (step === "result") {
    return <FortuneResult id={id} title={data.title} />;
  }

  return (
    <PageShell>
      {/* 어서오세요 탭화면 */}
      <div
        className="relative w-full max-w-[450px] flex flex-col flex-shrink-0 -mt-4 -mb-4"
        style={{ height: "calc(100dvh - 3.5rem)" }}
      >
        {/* Back button */}
        <Link
          href="/"
          className="absolute top-5 left-5 z-20 w-9 h-9 rounded-lg  backdrop-blur-sm border border-white flex items-center justify-center shadow-sm hover:bg-white/50 transition-colors"
          aria-label="뒤로가기"
        >
          <ChevronLeft className="relative w-6 h-6 text-white" />
        </Link>

        {/* 1. character = 바탕이미지 (background) + character2 + character3 */}
        <div className="relative flex-1 min-h-0 overflow-hidden  shadow-2xl">
          <Image
            src={data.character}
            alt=""
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />

          {/* 2. character2 = 사람이미지 (person) — 상단 중앙, 부모 넘어 확장 (선택) */}
          {data.character2 && (
            <div className="absolute left-1/2 top-[15%] z-10 w-[125%] min-w-[500px] -translate-x-1/2">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={data.character2}
                  alt={data.title}
                  fill
                  className="object-contain object-bottom"
                  unoptimized
                />
              </div>
            </div>
          )}

          {/* 그라데이션: 위 투명 → 아래 어두움 (2번과 3번 사이) */}
          <div
            className="absolute inset-0 z-[15] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.7) 100%)",
            }}
            aria-hidden="true"
          />

          {/* 3. character3 = 두루마리 이미지 + 텍스트, 4. 버튼 — 배경 위, 두루마리 밑 */}
          <div className="absolute bottom-[30px] left-0 right-0 z-20 flex flex-col px-4 pb-2">
            <div className="relative w-full flex-shrink-0">
              <Image
                src={data.character3}
                alt=""
                width={360}
                height={140}
                className="w-full h-auto object-contain"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center px-10 py-6">
                <p className="font-jejumyeongjo text-[16px] mb-2 text-[oklch(0.25_0.02_50)] leading-relaxed whitespace-pre-line text-center">
                  {data.greeting}
                </p>
              </div>
            </div>
            <button
              onClick={() => setStep("form")}
              className="mt-2 w-full flex-shrink-0 py-3 rounded-lg font-semibold text-[17px] text-[oklch(0.25_0.05_50)] transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                background:
                  "linear-gradient(to right, #FEFFCB 0%, #FFE7A0 100%)",
                boxShadow: "0 2px 12px rgba(255, 231, 160, 0.35)",
              }}
            >
              {data.inputPlaceholder}
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

// ── Shared page shell (header + moon bg) ─────────────────────────────────────

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen h-[100dvh] max-h-[100dvh] bg-[#f0ece4] relative overflow-hidden overscroll-none flex flex-col">
      <Navbar headerClassName="sticky top-0 bg-white border-[oklch(0.88_0.005_75)]" />

      {/* Left background — viewport left edge */}
      <div
        className="pointer-events-none absolute left-0 bottom-0 hidden xl:block h-[760px] w-[600px] bg-cover bg-left-bottom bg-no-repeat opacity-80 z-0"
        style={{
          backgroundImage: "url('/main/wall01.png')",
        }}
        aria-hidden="true"
      />

      {/* Right background — viewport right edge */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 hidden xl:block h-[560px] w-[600px] bg-cover bg-right-bottom bg-no-repeat opacity-80 z-0"
        style={{
          backgroundImage: "url('/main/wall02.png')",
        }}
        aria-hidden="true"
      />
      <main className="flex-1 min-h-0 overflow-hidden flex items-center justify-center px-4 relative z-10 py-4">
        {children}
      </main>
    </div>
  );
}

// ── Situation Step ────────────────────────────────────────────────────────────

const SITUATION_OPTIONS = [
  "연애 / 사랑",
  "직장 / 취업",
  "재물 / 사업",
  "건강",
  "가족 / 인간관계",
  "학업 / 시험",
  "이사 / 이직",
  "기타",
];

interface SituationStepProps {
  data: {
    title: string;
    situationCharacter: string;
    situationCharacter2: string;
    situationGreeting: string;
    situationPlaceholder: string;
  };
  onBack: () => void;
  onNext?: () => void;
}

function SituationStep({ data, onBack, onNext }: SituationStepProps) {
  const [subStep, setSubStep] = useState<"intro" | "form">("intro");
  const [selected, setSelected] = useState("");
  const [custom, setCustom] = useState("");

  const isValid = selected !== "";

  if (subStep === "form") {
    return (
      <PageShell>
        <div
          className="relative w-full max-w-[450px] flex flex-col flex-shrink-0 -mt-4 -mb-4  overflow-hidden"
          style={{ height: "calc(100dvh - 3.5rem)" }}
        >
          {/* Back button */}
          <button
            onClick={() => setSubStep("intro")}
            className="absolute top-3 left-3 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
            aria-label="뒤로가기"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>

          {/* Character image — 풀 height 배경 */}
          <div className="absolute inset-0 z-0  overflow-hidden">
            <Image
              src={data.situationCharacter}
              alt={data.title}
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.9) 100%)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Form panel 저의 상황은? 폼 — 이미지 위 오버레이 */}
          <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end overflow-hidden">
            <div className="flex flex-col rounded-b-2xl px-6 pt-5 pb-6  shadow-2xl space-y-7">
              {/* Label */}
              <label className="font-pretendard block text-[16px] text-white font-bold mb-2">
                저의 상황은
              </label>

              {/* Dropdown */}
              <div className="relative">
                <select
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className={`font-pretendard w-full pt-4 appearance-none bg-transparent border border-white rounded-xl px-4 py-3 text-[17px] focus:outline-none focus:border-white transition-colors ${selected ? "text-white" : "text-white/60"}`}
                >
                  <option value="" disabled>
                    상황을 선택해주세요.
                  </option>
                  {SITUATION_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
                  <ChevronDown className="w-6 h-6" />
                </div>
              </div>

              {/* Free-text input */}
              <div>
                <input
                  type="text"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  placeholder="직접 입력해주세요."
                  className="font-pretendard w-full bg-transparent border border-white rounded-xl px-4 py-3 text-[17px] text-white placeholder:text-white/60 placeholder:text-[16px] focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Next button — fortune-form 입력 완료 버튼 스타일 */}
              <button
                disabled={!isValid}
                onClick={() => {
                  if (isValid && onNext) onNext();
                }}
                className="font-pretendard w-full py-3 rounded-lg font-bold text-[19px] transition-opacity disabled:opacity-50 hover:opacity-90 active:opacity-80"
                style={{
                  background:
                    "linear-gradient(to right, #FEFFCB 0%, #FFE7A0 100%)",
                  color: "oklch(0.2 0.04 60)",
                  boxShadow: isValid
                    ? "0 2px 12px oklch(0.72 0.12 75 / 0.35)"
                    : "none",
                }}
              >
                다음으로
              </button>
            </div>
          </div>
        </div>
      </PageShell>
    );
  }

  // ── 지금 나의상황은? 화면 ──
  return (
    <PageShell>
      <div
        className="relative w-full max-w-[450px] flex flex-col flex-shrink-0 -mt-4 -mb-4"
        style={{ height: "calc(100dvh - 3.5rem)" }}
      >
        <button
          onClick={onBack}
          className="absolute top-3 left-3 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          aria-label="뒤로가기"
        >
          <ChevronLeft className="relative w-4 h-4 text-foreground" />
        </button>

        <div className="overflow-hidden shadow-2xl relative flex-1 min-h-0 flex flex-col">
          <Image
            src={data.situationCharacter}
            alt={data.title}
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />

          {/* 그라데이션: 위 투명 → 아래 어두움 */}
          <div
            className="absolute inset-0 z-[10] pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.7) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center px-4 pb-6">
            <div className="relative w-full max-w-[450px] flex-shrink-0">
              <Image
                src={data.situationCharacter2}
                alt=""
                width={400}
                height={120}
                className="w-full h-auto object-contain"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center px-8 py-5">
                <p className="font-jejumyeongjo text-[16px] mb-2 text-[oklch(0.25_0.02_50)] leading-relaxed whitespace-pre-line text-center">
                  {data.situationGreeting}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSubStep("form")}
              className="mt-3 mb-6 z-30 flex-shrink-0 w-full max-w-[400px] py-3 rounded-lg font-bold text-[16px] md:text-[19px] transition-opacity hover:opacity-90 active:opacity-80"
              style={{
                background:
                  "linear-gradient(to right, #FEFFCB 0%, #FFE7A0 100%)",
                boxShadow: "0 2px 12px oklch(0.72 0.12 75 / 0.35)",
              }}
            >
              {data.situationPlaceholder}
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
