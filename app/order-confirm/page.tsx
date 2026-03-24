import { OrderConfirmForm } from "@/components/order-confirm/order-confirm-form";
import { ScholarCharacter } from "@/components/order-confirm/scholar-character";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function OrderConfirmPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-end justify-center px-4 pt-12 md:pt-20 pb-0">
        {/* 💡 수정 포인트 1: 모바일에서는 items-center, PC(md 이상)에서는 items-end 적용 */}
        <div className="ml-[6%] w-full max-w-8xl flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-16 lg:gap-24">
          {/* 💡 수정 포인트 2: 모바일 화면에서 영역 전체를 차지해 중앙 정렬이 먹히도록 w-full 추가 */}
          <div className="w-full md:w-auto flex-1 flex items-end justify-center">
            <ScholarCharacter />
          </div>

          {/* 오른쪽: 폼 (참고: mb-30은 테일윈드 기본 클래스에 없으므로 적용이 안 될 수 있습니다. mb-32나 mb-[120px] 등으로 변경을 권장합니다) */}
          <div className="mr-[3%] flex-1 flex items-center justify-center w-full mb-32 md:mb-60">
            <OrderConfirmForm />
          </div>
        </div>
      </main>
      <div className="block md:hidden">
        <Footer />
      </div>
    </div>
  );
}
