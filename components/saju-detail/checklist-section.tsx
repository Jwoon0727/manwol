"use client";

const SHOULD_DO = [
  "월세 세액공제 신청 (총급여 7,000만원 이하, 월세의 15~17%)",
  "신용카드·체크카드 사용 내역 꼼꼼히 확인하기",
  "의료비 지출 영수증 및 현금영수증 발급 확인",
  "연금저축 및 IRP 납입 내역 정리 (최대 900만원 공제)",
  "기부금 영수증 모두 수집하여 세액공제 신청",
  "장애인 관련 공제 항목 해당 여부 확인",
];

const SHOULD_NOT = [
  "이미 소득이 없는 부모님을 중복 공제 신청하는 행위",
  "다른 가족원이 이미 공제받은 부양가족 중복 등록",
  "학원비, 취미 교육비를 교육비 공제 항목으로 신고",
  "사업소득 발생 시 근로소득자 혜택 그대로 적용하기",
  "공제 서류 미제출로 인한 누락 발생 주의",
];

export default function ChecklistSection() {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <p
            className="text-xs font-semibold tracking-widest mb-1"
            style={{ color: "#c9a84c" }}
          >
            실천 체크리스트
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-foreground leading-tight">
            해야 할 것과<br />
            <span style={{ color: "#c9a84c" }}>하지 말아야 할 것</span>으로 구분
          </h2>
          <p className="text-muted-foreground text-sm mt-2">
            올해 연말정산에서 놓치지 말아야 할 사항과 주의해야 할 실수를 정리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Should Do */}
          <div
            className="rounded-xl p-6"
            style={{ background: "#f0f8ec", border: "1px solid #c3e6b0" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#3a7a2a", color: "white" }}
              >
                O
              </div>
              <h3 className="text-sm font-bold" style={{ color: "#2d6622" }}>
                해야 할 것 (DO)
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {SHOULD_DO.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold"
                    style={{ background: "#3a7a2a", color: "white" }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xs leading-relaxed" style={{ color: "#2d4f22" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Should Not Do */}
          <div
            className="rounded-xl p-6"
            style={{ background: "#fef4f2", border: "1px solid #fac5bb" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#c0392b", color: "white" }}
              >
                X
              </div>
              <h3 className="text-sm font-bold" style={{ color: "#922b21" }}>
                하지 말아야 할 것 (DON&apos;T)
              </h3>
            </div>
            <ul className="flex flex-col gap-3">
              {SHOULD_NOT.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span
                    className="w-4 h-4 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold"
                    style={{ background: "#c0392b", color: "white" }}
                  >
                    !
                  </span>
                  <span className="text-xs leading-relaxed" style={{ color: "#6e1f18" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
