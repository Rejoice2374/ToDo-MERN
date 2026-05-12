import { useStats } from "@/hooks/useStats"
import { Button } from "./ui/button"
import ProgressCard from "./ProgressCard"

const HabitProgress = () => {
  const { stats, loading } = useStats()
  const dueSoon = stats?.dueSoon.filter((habit) => !habit.completed)
  console.log(loading, dueSoon)

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Active Habits</h2>
        <Button variant="ghost" className="rounded-2xl">
          View All
        </Button>
      </div>
      <div className="rounded-3xl border">
        <ProgressCard habits={dueSoon!} limit={3} />
      </div>
    </section>
  )
}

export default HabitProgress
