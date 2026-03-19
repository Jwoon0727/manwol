"use client";

import { Lock } from "lucide-react";

const SHOULD_DO = [
  "용신 수(水) 계열의 일정·환경·역할을 우선순위에 두세요.",
  "시주 미래축은 2026년에 직접 자극되므로 분기마다 상태를 점검하세요.",
  "상승월 11월·10월·3월에는 확장보다 구조화된 실행으로 성과를 고정하새요.",
];

const SHOULD_NOT = [
  "주의월 1월·6월·12월에는 충·형이 걸린 관계 정리나 계약을 서두르지 마세요.",
  "기신 - 과다로 이어지는 과속·과열·과잉반응 패턴을 반복하지 마세요.",
  "배우자궁 안정도 변동 구간에서는 감정 해석보다 사실 확인을 우선하세요.",
];

interface ChecklistSectionProps {
  /** true일 때 피해야 할 것 박스를 블러 + 결제 버튼 오버레이 */
  previewMode?: boolean;
}

export default function ChecklistSection({
  previewMode = false,
}: ChecklistSectionProps) {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <p
            className="text-xs font-semibold tracking-widest mb-1"
            style={{ color: "#c9a84c" }}
          >
            실천 체크리스트
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
            해야 할 것과
            <br />
            <span style={{ color: "#c9a84c" }}>하지 말아야 할 것</span>으로 구분
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            2026년을 잘 살아내기 위한 가장 구체적인 행동 지침입니다.운은 방향을
            알려주고, 행동이 결과를 만듭니다.이 리스트를 자주 꺼내보고 판단의
            기준으로 삼으세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 해야 할 것 (DO) */}
          <div
            className="rounded-sm p-6 md:p-8 bg-white"
            style={{
              border: "1px solid #3355FF",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            <h3
              className="text-base font-bold mb-5"
              style={{ color: "#3355FF" }}
            >
              해야 할 것 (DO)
            </h3>
            <ul className="flex flex-col gap-4">
              {SHOULD_DO.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ border: "1px solid #3355FF", color: "#3355FF" }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-gray-800">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 피해야 할 것 (AVOID) */}
          <div
            className={`rounded-sm p-6 md:p-8 bg-white relative overflow-hidden ${
              previewMode ? "select-none" : ""
            }`}
            style={{
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              border: "1px solid #FF2C30",
            }}
          >
            {previewMode && (
              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-sm"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0.95) 100%)",
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-colors hover:opacity-90"
                  style={{
                    background: "#1A1A1A",
                    color: "#FFD061",
                  }}
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  결제 후 전체 공개
                </button>
              </div>
            )}
            <div
              className={previewMode ? "blur-[10px] pointer-events-none" : ""}
            >
              <h3
                className="text-base font-bold mb-5"
                style={{ color: "#FF2C30" }}
              >
                피해야 할 것 (AVOID)
              </h3>
              <ul className="flex flex-col gap-4">
                {SHOULD_NOT.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ border: "1px solid #FF2C30", color: "#FF2C30" }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-gray-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
