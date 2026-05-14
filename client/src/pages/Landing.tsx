import { AnimatedSection } from "@/components/landing/animated-section"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { HeroSection } from "@/components/landing/hero-section"
import { Navigation } from "@/components/landing/navigation"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background pb-0">
      <div className="relative z-10">
        <main className="relative mx-auto max-w-330">
          <Navigation />
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute -bottom-42 left-1/2 z-30 -translate-x-1/2 transform md:-bottom-100">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
      </div>
    </div>
  )
}
