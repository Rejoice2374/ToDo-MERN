import { AnimatedSection } from "@/components/landing/animated-section"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { HeroSection } from "@/components/landing/hero-section"
import { Navigation } from "@/components/landing/navigation"
import Features from "@/components/landing/Features"
import { PricingSection } from "@/components/landing/pricing-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { FooterSection } from "@/components/landing/footer-section"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background pb-0">
      <div className="relative z-10">
        <main className="relative mx-auto max-w-340">
          <Navigation />
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute -bottom-42 left-1/2 z-30 -translate-x-1/2 transform md:-bottom-100 xl:-bottom-120">
            <AnimatedSection>
              <DashboardPreview />
            </AnimatedSection>
          </div>
        </main>
        <AnimatedSection
          id="features"
          className="relative z-10 mx-auto mt-16 max-w-340"
          delay={0.2}
        >
          <Features />
        </AnimatedSection>
        <AnimatedSection
          id="pricing-section"
          className="relative z-10 mx-auto mt-8 max-w-340 md:mt-16"
          delay={0.2}
        >
          <PricingSection />
        </AnimatedSection>
        <AnimatedSection
          id="faq-section"
          className="relative z-10 mx-auto mt-8 max-w-340 md:mt-16"
          delay={0.2}
        >
          <FAQSection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 mx-auto mt-8 max-w-340 md:mt-16"
          delay={0.2}
        >
          <CTASection />
        </AnimatedSection>
        <AnimatedSection
          className="relative z-10 mx-auto mt-8 max-w-340 md:mt-16"
          delay={0.2}
        >
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
