import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import HeroImage from "@/assets/HeroSection1.jpg"

export function HeroSection() {
  return (
    <section className="relative mx-auto flex h-100 w-full flex-col items-center justify-center overflow-hidden rounded-b-2xl px-4 py-0 text-center md:h-150 md:w-full lg:h-202.5">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={HeroImage}
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative flex w-full max-w-4xl flex-col items-center gap-4 px-4 py-8 md:gap-6">
          <h1 className="max-w-lg text-3xl leading-tight font-semibold text-foreground md:text-4xl lg:text-6xl">
            Build Better Habits, One Day at a Time
          </h1>

          <p className="mx-auto max-w-lg text-base leading-relaxed font-medium text-secondary lg:text-lg">
            Track your progress, stay consistent, and take control of your
            routines with HabitCheck, your personal habit and productivity
            companion.
          </p>
        </div>

        <Link to="/auth?type=sign-up" rel="noopener noreferrer">
          <Button className="rounded-full bg-secondary px-8 py-3 text-base font-medium text-secondary-foreground shadow-lg ring-1 ring-white/10 hover:bg-secondary/90">
            Signup for free
          </Button>
        </Link>
      </div>
    </section>
  )
}
