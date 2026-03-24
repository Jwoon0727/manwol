import Image from "next/image";
import Navbar from "../navbar";

const PILLARS = [
  {
    label: "시주(時柱)",
    stem: "甲",
    stemReading: "갑",
    branch: "午",
    branchReading: "오",
    stemHighlight: false,
    branchHighlight: false,
  },
  {
    label: "일주(日柱)",
    stem: "辛",
    stemReading: "신",
    branch: "未",
    branchReading: "미",
    stemHighlight: true,
    branchHighlight: true,
  },
  {
    label: "월주(月柱)",
    stem: "癸",
    stemReading: "계",
    branch: "卯",
    branchReading: "묘",
    stemHighlight: false,
    branchHighlight: false,
  },
  {
    label: "연주(年柱)",
    stem: "丁",
    stemReading: "정",
    branch: "丑",
    branchReading: "축",
    stemHighlight: false,
    branchHighlight: false,
  },
] as const;

export default function HeroSection() {
  return (
    <div className="w-full" style={{ background: "#ffffff" }}>
      {/* ── Header ── (고정, 스크롤 시 움직이지 않음) */}
      <Navbar headerClassName="fixed top-0 left-0 right-0 z-50 bg-white border-[oklch(0.88_0.005_75)]" />
      <div className="max-w-8xl mx-auto pt-18">
        {/* Dark card with rounded bottom */}
        <div
          className="w-full px-28 pt-7 pb-8"
          style={{
            background: "#0E0E0E",
            borderRadius: "0 0 4rem 4rem",
            color: "#f0ebe0",
          }}
        >
          {/* Version badge */}
          <div className="mb-5 pt-8">
            <span
              className="bg-white/10
              font-pretendard
  backdrop-blur-xl
  rounded-full
  px-4.5 py-2
  text-[10px] md:text-[12px]
  text-white
  inline-flex items-center justify-center /* flex를 inline-flex로 변경 */
  leading-none
  shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-2px_6px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.4)]"
            >
              2026.02.14 만세력2.0 신살(SIS)1.0 버전 적용
            </span>
          </div>

          {/* Top: Name + photo row */}
          <div className="flex items-start justify-between gap-6">
            {/* Left content */}
            <div className="flex-1 min-w-0">
              {/* Name */}
              <h1
                className="font-yeongwol font-medium mb-1.5 bg-gradient-to-r from-[#FFD594] to-[#FFB748] bg-clip-text text-transparent leading-none"
                style={{
                  fontSize: "clamp(5.5rem, 22vw, 6rem)",

                  letterSpacing: "-0.02em",
                }}
              >
                차은우
              </h1>

              {/* Subtitle */}
              <p
                className="font-yeongwol font-medium mb-2"
                style={{
                  fontSize: "1.8rem",
                  color: "#ffffff",
                  lineHeight: 1.4,
                }}
              >
                불(火)·목(木)·대지(土) 시너지의 별빛 비주얼
              </p>

              {/* Description */}
              <div className="space-y-1">
                <p
                  className="font-jejumyeongjo text-sm"
                  style={{ color: "#ffffff" }}
                >
                  조각 같은 외모 뒤에 숨은 사주 비밀은?
                </p>
                <p
                  className="font-jejumyeongjo text-sm"
                  style={{ color: "#ffffff" }}
                >
                  오행·대운·세운 데이터로 차은우의 글로벌 성장 로드맵을
                  분석합니다.
                </p>
              </div>
            </div>

            {/* Right: Profile photo with stacked gray layer */}
            <div
              className="flex-shrink-0"
              style={{
                position: "relative",
                width: 160 + 12,
                height: 240 + 12,
                marginTop: -50,
              }}
            >
              {/* Gray background layer — offset bottom-right */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  width: 160,
                  height: 240, // 2. 회색 배경 높이 변경 (200 -> 240)
                  borderRadius: "0.85rem",
                  background: "#444",
                }}
              />
              {/* Photo card — sits on top */}
              <div
                className="overflow-hidden"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 160,
                  height: 240, // 3. 사진 카드 테두리 높이 변경 (200 -> 240)
                  borderRadius: "0.85rem",
                  border: "2.5px solid #c8973a",
                  background: "#2a2a2a",
                }}
              >
                <Image
                  src="/main/celeb/celeb01.png"
                  alt="차은우 프로필"
                  width={160}
                  height={240} // 4. 실제 Next.js 이미지 컴포넌트 높이 변경 (200 -> 240)
                  priority
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-7" />

          {/* Saju table section */}
          <SajuTable />
        </div>
      </div>
    </div>
  );
}

function SajuTable() {
  const pillars = PILLARS;

  // 💡 보더 색상을 바깥쪽과 안쪽 두 개로 분리했습니다.
  const outerBorder = "1px solid #FFD594";
  const innerBorder = "0.5px solid #FFFFFF"; // 조금 더 은은한 선을 원하시면 "1px solid rgba(255, 255, 255, 0.2)" 로 변경해 보세요!

  return (
    <div>
      {/* Label */}
      <div className="flex items-baseline gap-3 mb-5">
        <span
          className="font-pretendard font-bold text-base"
          style={{ color: "#FFD594" }}
        >
          사주 정보 및 만세력
        </span>
        <span className="font-pretendard text-xs" style={{ color: "#ffffff" }}>
          1997년 3월 30일 갑오시 (양력)
        </span>
      </div>

      {/* Table */}
      <div
        className="w-full overflow-hidden mb-10"
        style={{ border: outerBorder, borderRadius: "1.5rem" }} // 바깥 테두리 적용
      >
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          {/* Header row */}
          <thead>
            <tr>
              <th
                className="text-xs font-normal py-3 px-4 text-center"
                style={{
                  background: "#1a1a1a",
                  color: "#ffffff",
                  borderRight: innerBorder, // 안쪽 선 적용
                  borderBottom: innerBorder,
                  width: "18%",
                }}
              />
              {pillars.map((p) => (
                <th
                  key={p.label}
                  className="font-pretendard text-[15px] font-semibold py-3 px-4 text-center"
                  style={{
                    background: "#1a1a1a",
                    color: "#ffffff",
                    borderRight: innerBorder,
                    borderBottom: innerBorder,
                  }}
                >
                  {p.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Heavenly Stem row */}
            <tr>
              <td
                className="font-pretendard py-4 px-4 text-center text-[15px] font-semibold"
                style={{
                  background: "#252525",
                  color: "#ffffff",
                  borderRight: innerBorder,
                  borderBottom: innerBorder,
                }}
              >
                천간(天干)
              </td>
              {pillars.map((p, i) => (
                <td
                  key={i}
                  className="py-4 px-4 text-center"
                  style={{
                    background: "#252525",
                    borderRight:
                      i < pillars.length - 1 ? innerBorder : undefined,
                    borderBottom: innerBorder,
                  }}
                >
                  <span
                    className="font-pretendard font-serif font-bold"
                    style={{
                      fontSize: "2rem",
                      color: p.stemHighlight ? "#d9534f" : "#ffffff",
                    }}
                  >
                    {p.stem}
                  </span>
                  <span
                    className="font-pretendard text-[15px] ml-1"
                    style={{ color: p.stemHighlight ? "#d9534f" : "#ffffff" }}
                  >
                    {"(" + p.stemReading + ")"}
                  </span>
                </td>
              ))}
            </tr>

            {/* Earthly Branch row */}
            <tr>
              <td
                className="font-pretendard py-4 px-4 text-center text-[15px] font-semibold"
                style={{
                  background: "#252525",
                  color: "#ffffff",
                  borderRight: innerBorder,
                }}
              >
                {"지지(地支)"}
              </td>
              {pillars.map((p, i) => (
                <td
                  key={i}
                  className="py-4 px-4 text-center"
                  style={{
                    background: "#252525",
                    borderRight:
                      i < pillars.length - 1 ? innerBorder : undefined,
                  }}
                >
                  <span
                    className="font-pretendard font-serif font-bold"
                    style={{
                      fontSize: "2rem",
                      color: p.branchHighlight ? "#d9534f" : "#ffffff",
                    }}
                  >
                    {p.branch}
                  </span>
                  <span
                    className="font-pretendard text-[15px] ml-1"
                    style={{ color: p.branchHighlight ? "#d9534f" : "#ffffff" }}
                  >
                    {"(" + p.branchReading + ")"}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
