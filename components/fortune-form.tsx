"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronDown, Check } from "lucide-react";
import Navbar from "./navbar";

const TIME_OPTIONS = [
  "자시 (23:00 ~ 01:00)",
  "축시 (01:00 ~ 03:00)",
  "인시 (03:00 ~ 05:00)",
  "묘시 (05:00 ~ 07:00)",
  "진시 (07:00 ~ 09:00)",
  "사시 (09:00 ~ 11:00)",
  "오시 (11:00 ~ 13:00)",
  "미시 (13:00 ~ 15:00)",
  "신시 (15:00 ~ 17:00)",
  "유시 (17:00 ~ 19:00)",
  "술시 (19:00 ~ 21:00)",
  "해시 (21:00 ~ 23:00)",
];

interface Props {
  id: string;
  character: string;
  character2?: string;
  title: string;
  onBack: () => void;
  onSubmit?: () => void;
}

export default function FortuneForm({
  id,
  character,
  character2,
  title,
  onBack,
  onSubmit,
}: Props) {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [calendarType, setCalendarType] = useState<"양력" | "음력">("양력");
  const [birthTime, setBirthTime] = useState("");
  const [unknownTime, setUnknownTime] = useState(false);
  const [gender, setGender] = useState<"남성" | "여성" | null>(null);
  const [timeOpen, setTimeOpen] = useState(false);

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Auto-format: YYYY.MM.DD
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 8) val = val.slice(0, 8);
    if (val.length >= 5) val = val.slice(0, 4) + "." + val.slice(4);
    if (val.length >= 8) val = val.slice(0, 7) + "." + val.slice(7);
    setBirthDate(val);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    if (onSubmit) {
      onSubmit();
    }
  };

  const isValid =
    name.trim() !== "" && birthDate.length >= 10 && gender !== null;

  return (
    <div className="h-screen bg-[#f0ece4] relative overflow-hidden flex flex-col ">
      {/* Header */}
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

      {/* Main — fortune-detail과 동일 구조 */}
      <main className="flex-1 min-h-0 overflow-hidden flex items-center justify-center px-4 relative z-10 py-4">
        <div
          className="relative w-full max-w-[450px] flex flex-col flex-shrink-0 -mt-4 -mb-4"
          style={{ height: "calc(100vh - 3.5rem)" }}
        >
          <div className="relative flex flex-1 min-h-0 flex-col overflow-hidden shadow-2xl rounded-2xl">
            {/* 1. character = 바탕이미지 (background) + character2 */}
            <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
              <Image
                src={character}
                alt=""
                fill
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute inset-0 bg-black/20"
                aria-hidden="true"
              />

              {/* 2. character2 = 사람이미지 (person) — 상단 중앙, 부모 넘어 확장 */}
              {character2 && (
                <div className="absolute left-1/2 top-[15%] z-10 w-[125%] min-w-[500px] -translate-x-1/2">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={character2}
                      alt={title}
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              )}
            </div>

            <div
              className="absolute inset-0 z-[10] pointer-events-none"
              style={{
                background: "rgba(0,0,0,0.7)",
              }}
              aria-hidden="true"
            />
            {/* Back button */}
            <button
              onClick={onBack}
              className="absolute top-5 left-5 z-20 w-9 h-9 rounded-lg  backdrop-blur-sm border border-white flex items-center justify-center shadow-sm hover:bg-white/50 transition-colors"
              aria-label="뒤로가기"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Form area — 바탕이미지 위에 오버레이 */}
            <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto bg-transparent rounded-b-2xl px-6 pt-[320px]">
              <div className="min-h-0 flex-1 space-y-7 overflow-y-auto">
                {/* 이름 */}
                <div>
                  <label className="block  text-[16px] text-white mb-2 font-bold">
                    이름
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력해 주세요."
                    className="w-full pt-4 bg-transparent border border-white rounded-xl px-4 py-3 text-[17px] text-white placeholder:text-white placeholder:text-[16px] focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* 생년월일 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[16px] text-white font-bold">
                      나의 생년월일
                    </label>
                    <div className="flex items-center gap-3 text-[16px]">
                      {(["양력", "음력"] as const).map((type) => (
                        <button
                          key={type}
                          onClick={() => setCalendarType(type)}
                          className="flex items-center gap-1 transition-colors"
                        >
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                              calendarType === type
                                ? "border-white bg-white"
                                : "border-white/60"
                            }`}
                          >
                            {calendarType === type && (
                              <Check className="w-2.5 h-2.5 text-[oklch(0.15_0_0)]" />
                            )}
                          </span>
                          <span
                            className={
                              calendarType === type
                                ? "text-[oklch(0.82_0.01_80)]"
                                : "text-[oklch(0.45_0.01_80)]"
                            }
                          >
                            {type}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <input
                    type="text"
                    value={birthDate}
                    onChange={handleBirthDateChange}
                    placeholder="0000.00.00"
                    maxLength={10}
                    className="w-full pt-4 bg-transparent border border-white rounded-xl px-4 py-3 text-[17px] text-white placeholder:text-white placeholder:text-[16px] focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* 태어난 시간 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[16px] text-white font-bold">
                      나의 태어난 시간
                    </label>
                    <button
                      onClick={() => setUnknownTime(!unknownTime)}
                      className="flex items-center gap-1.5 text-[16px] transition-colors"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                          unknownTime
                            ? "border-white bg-white"
                            : "border-white/60"
                        }`}
                      >
                        {unknownTime && (
                          <Check className="w-3 h-3 text-black" />
                        )}
                      </span>
                      <span
                        className={unknownTime ? "text-white" : "text-white/60"}
                      >
                        시간모름
                      </span>
                    </button>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => !unknownTime && setTimeOpen(!timeOpen)}
                      disabled={unknownTime}
                      className={`w-full pt-5 border rounded-xl px-4 py-3 text-[13px] text-left flex items-center justify-between transition-colors ${
                        unknownTime
                          ? "border-white/40 text-white/50 cursor-not-allowed bg-transparent"
                          : "border-white text-white hover:border-white bg-transparent"
                      }`}
                    >
                      <span
                        className={`text-[16px] ${!birthTime && !unknownTime ? "text-white" : ""}`}
                      >
                        {unknownTime
                          ? "시간모름"
                          : birthTime || "태어난 시간을 선택해주세요."}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform ${timeOpen ? "rotate-180" : ""} ${unknownTime ? "text-white/60" : "text-white"}`}
                      />
                    </button>
                    {timeOpen && !unknownTime && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-black/80 backdrop-blur-sm border border-white/60 rounded-xl overflow-hidden z-30 shadow-xl max-h-48 overflow-y-auto">
                        {TIME_OPTIONS.map((t) => (
                          <button
                            key={t}
                            onClick={() => {
                              setBirthTime(t);
                              setTimeOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-[13px] text-left hover:bg-white/10 transition-colors ${birthTime === t ? "text-white font-bold" : "text-white/60"}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* 성별 */}
                <div>
                  <label className="block text-[16px] text-white font-bold mb-2">
                    성별
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["남성", "여성"] as const).map((g) => (
                      <button
                        key={g}
                        onClick={() => setGender(g)}
                        className={`py-3 rounded-lg text-[14px] font-medium border transition-all ${
                          gender === g
                            ? "bg-white text-[oklch(0.15_0_0)] border-white"
                            : "bg-transparent text-white border-white hover:border-white/80"
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="mb-6 z-30 flex-shrink-0 w-full py-3 rounded-lg font-bold text-[19px] transition-opacity hover:opacity-90 active:opacity-80"
                style={{
                  background:
                    "linear-gradient(to right, #FEFFCB 0%, #FFE7A0 100%)",
                  color: "oklch(0.2 0.04 60)",
                  boxShadow: "0 2px 12px oklch(0.72 0.12 75 / 0.35)",
                }}
              >
                입력 완료
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
