import Image from "next/image";
import { ChevronRight } from "lucide-react";

type TagColor = "blue" | "orange" | "none";

const celebrities = [
  {
    id: 1,
    name: "차은우",
    desc: "사주 한줄평이 들어가는 자리입니다.",
    image: "/main/celeb/celeb01.png",
    buttons: ["천을귀인", "백호살"],
    tag: "아이돌" as const,
    tagColor: "#FF801F" as string,
  },
  {
    id: 2,
    name: "차은우",
    desc: "사주 한줄평이 들어가는 자리입니다.",
    image: "/main/celeb/celeb01.png",
    buttons: ["천을귀인", "백호살"],
    tag: "아이돌" as const,
    tagColor: "#FF801F" as string,
  },
  {
    id: 3,
    name: "차은우",
    desc: "사주 한줄평이 들어가는 자리입니다.",
    image: "/main/celeb/celeb01.png",
    buttons: ["천을귀인", "백호살"],
    tag: "배우" as const,
    tagColor: "#587CFF" as string,
  },
  {
    id: 4,
    name: "차은우",
    desc: "사주 한줄평이 들어가는 자리입니다.",
    image: "/main/celeb/celeb01.png",
    buttons: ["천을귀인", "백호살"],
    tag: null,
    tagColor: "none" as TagColor,
  },
  {
    id: 5,
    name: "차은우",
    desc: "사주 한줄평이 들어가는 자리입니다.",
    image: "/main/celeb/celeb01.png",
    buttons: ["천을귀인", "백호살"],
    tag: null,
    tagColor: "none" as TagColor,
  },
  {
    id: 6,
    name: "차은우",
    desc: "사주 한줄평이 들어가는 자리입니다.",
    image: "/main/celeb/celeb01.png",
    buttons: ["천을귀인", "백호살"],
    tag: null,
    tagColor: "none" as TagColor,
  },
  {
    id: 7,
    name: "차은우",
    desc: "사주 한줄평이 들어가는 자리입니다.",
    image: "/main/celeb/celeb01.png",
    buttons: ["천을귀인", "백호살"],
    tag: null,
    tagColor: "none" as TagColor,
  },
];

const tagColorMap: Record<TagColor, string> = {
  orange: "bg-[var(--tag-orange)] text-white",
  blue: "bg-[var(--tag-blue)] text-white",
  none: "",
};

export default function CelebritySaju() {
  return (
    <section className="font-pretendard py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
        유명인 사주 분석
      </h2>

      {/* Scrollable row */}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 pl-5 pr-4 snap-x snap-mandatory scroll-pl-10 scrollbar-hide md:[mask-image:linear-gradient(to_right,transparent,black_36px,black_calc(100%-36px),transparent)] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_36px,black_calc(100%-36px),transparent)]">
        {celebrities.map((celeb) => (
          <div
            key={celeb.id}
            className="flex-shrink-0 snap-start w-[170px] md:w-[180px] cursor-pointer group"
          >
            {/* Photo */}
            <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-muted mb-2">
              <Image
                src={celeb.image}
                alt={celeb.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {celeb.tag && (
                <span
                  className={`absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-[5px] text-white ${
                    celeb.tagColor in tagColorMap
                      ? tagColorMap[celeb.tagColor as TagColor]
                      : ""
                  }`}
                  style={
                    typeof celeb.tagColor === "string" &&
                    celeb.tagColor.startsWith("#")
                      ? { backgroundColor: celeb.tagColor }
                      : undefined
                  }
                >
                  {celeb.tag}
                </span>
              )}
            </div>

            {/* Info */}
            <h3 className="text-sm font-bold text-foreground">{celeb.name}</h3>
            <p className="text-[11px] text-[#666666] mt-0.5 line-clamp-2 leading-relaxed">
              {celeb.desc}
            </p>

            {/* Buttons */}
            <div className="flex gap-1 mt-2">
              {celeb.buttons.map((label) => (
                <button
                  key={label}
                  className="text-[10px] font-medium border border-[#666666] rounded-[5px] px-1.5 py-0.5 text-[#666666] transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* More button */}
      <div className="flex justify-center mt-10 mb-15">
        <button className="inline-flex items-center gap-2 border border-[#000000] rounded-lg px-14 py-3 text-sm font-semibold text-foreground/70 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
          더보기
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
}
