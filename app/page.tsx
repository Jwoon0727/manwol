import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import FortuneCards from '@/components/fortune-cards'
import CelebritySaju from '@/components/celebrity-saju'
import DarkCta from '@/components/dark-cta'
import DreamAnalysis from '@/components/dream-analysis'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Push content below fixed header */}
      <div className="pt-14">
        <HeroBanner />
        <FortuneCards />
        <CelebritySaju />
        <DarkCta />
        <DreamAnalysis />
      </div>
      <Footer />
    </main>
  )
}
