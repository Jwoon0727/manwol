import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    id: 1,
    image: "/main/fortune-card/card01.png",
    image2: "/main/fortune-card/card01-1.png",
    title: "만월공자 신년운세",
    subtitle: "올해 꼭 해야할 것과 피해야할 문제는?",
    badge: null,
    badgeColor: "",
  },
  {
    id: 2,
    image: "/main/fortune-card/card02.png",
    image2: "/main/fortune-card/card02-2.png",
    title: "선화소자 연애비책",
    subtitle: "운명의 상대를 만나기위한 필수 코스!",
    badge: "BEST 후기",
    badgeColor: "bg-yellow-500 text-white",
  },
  {
    id: 3,
    image: "/main/fortune-card/card01.png",
    image2: "/main/fortune-card/card01-1.png",
    title: "명현도령 재물보감",
    subtitle: "내 평생의 재물운과 부자가 될 기회는?",
    badge: null,
    badgeColor: "",
  },
  {
    id: 4,
    image: "/main/fortune-card/card01.png",
    image2: "/main/fortune-card/card01-1.png",
    title: "만월공자 사주풀이",
    subtitle: "내 팔자엔 언제쯤 빛이 들어오나?",
    badge: null,
    badgeColor: "",
  },
];

export default function FortuneCards() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
        운명이 가는 곳
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link
            key={card.id}
            href={`/fortune/${card.id}`}
            className="group block cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-[#e8e2d8] shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {card.badge && (
                <span
                  className={`absolute left-3 top-3 z-20 rounded-sm px-2.5 py-1 text-[12px] font-bold shadow-sm ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              )}

              <div className="pointer-events-none absolute inset-x-[2%] bottom-[2%] z-10">
                {card.image2 ? (
                  <div className="relative aspect-[2.5/1] drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)]">
                    <Image
                      src={card.image2}
                      alt=""
                      fill
                      className="object-contain"
                    />
                    <div className="absolute inset-[16%_12%] flex items-center justify-center text-center"></div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="px-0 pt-4">
              <h3 className="text-lg font-medium tracking-[-0.02em] text-foreground">
                {card.title}
              </h3>
              <p className="mt-0.1 text-xs leading-6 text-muted-foreground line-clamp-2">
                {card.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
