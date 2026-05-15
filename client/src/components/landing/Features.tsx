import FeatureCard from "../FeatureCard"
import CreateHabit from "@/assets/CreateHabit.png"
import CategoryChart from "@/assets/CategoryChart.png"
import Streaks from "@/assets/LongestStreak.png"
import Performance from "@/assets/PerformanceChart.png"
import Progress from "@/assets/Progress.png"
import RecentlyCompleted from "@/assets/RecentlyCompleted.png"

const Features = () => {
  const cards = [
    {
      title: "Create a Habit",
      description:
        "Create a new habit you like to pick up, add target time, add to a Category.",
      Image: CreateHabit,
    },
    {
      title: "Monitor Top Categories",
      description:
        "See that area of your Life you a most interested in developing.",
      Image: CategoryChart,
    },
    {
      title: "Keep Your Streaks Alive",
      description:
        "Track your longest streaks and stay motivated to keep them going.",
      Image: Streaks,
    },
    {
      title: "Track Your Performance",
      description:
        "Visualize your habit performance with detailed charts and insights.",
      Image: Performance,
    },
    {
      title: "Progress at a Glance",
      description:
        "Get a quick overview of your habit progress and milestones achieved.",
      Image: Progress,
    },
    {
      title: "Recently Completed Habits",
      description:
        "Review your recently completed habits and celebrate your achievements.",
      Image: RecentlyCompleted,
    },
  ]

  return (
    <section className="mt-60 flex w-full flex-col items-center justify-center overflow-hidden bg-transparent px-5 md:mt-140">
      <div className="relative flex w-full flex-col items-start justify-start gap-6 py-8 md:py-16">
        <div className="absolute top-153.5 left-20 z-0 h-234.5 w-136.75 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px]" />
        <div className="z-10 flex flex-col items-center justify-center gap-2 self-stretch py-8 md:py-14">
          <div className="flex flex-col items-center justify-start gap-4">
            <h2 className="w-full max-w-163.75 text-center text-4xl leading-tight font-semibold text-foreground md:text-6xl md:leading-16.5">
              Everything You Need to Stay Consistent
            </h2>

            <p className="w-full max-w-150 text-center text-lg leading-relaxed font-medium text-muted-foreground md:text-xl">
              Track habits, monitor your progress, build streaks, and stay
              motivated with powerful tools designed to help you create lasting
              routines and achieve your goals.
            </p>
          </div>
        </div>
        <div className="z-10 grid grid-cols-1 gap-6 self-stretch md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
