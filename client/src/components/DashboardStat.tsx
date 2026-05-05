import { Separator } from "@/components/ui/separator"
import CategoryChart from "./CategoryChart"
import LongestStreak from "./LongestStreak"

const DashboardStat = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 md:px-10 md:py-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <Separator />
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Basic Habits Stats</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Categories Chart */}
          <CategoryChart />
          {/* Longest streak */}
          <LongestStreak />
        </div>
      </div>
      <Separator />
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Habits Insights</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Categories Chart */}
          <CategoryChart />
          {/* Longest streak */}
          <LongestStreak />
        </div>
      </div>
    </div>
  )
}

export default DashboardStat
