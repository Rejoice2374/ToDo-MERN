import { useStats } from "@/hooks/useStats"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { cn } from "@/lib/utils"
import { Flame } from "lucide-react"

const LongestStreak = () => {
  const { stats, loading } = useStats()

  const streak = stats?.performance?.longestStreak ?? 0

  return (
    <section className="space-y-4">
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Habit Streak</CardTitle>
          <CardDescription>
            This shows how consistent and committed to achieving your goals
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          {loading ? (
            <div>
              <p>Loading streak...</p>
            </div>
          ) : (
            <div className="mx-auto aspect-square max-h-62.5">
              <Flame className="text-orange-500" size={240} />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="leading-none font-medium">
            You have{" "}
            <span className={cn("text-[18px] font-semibold text-orange-500")}>
              {streak}
            </span>{" "}
            days streak
          </div>
          {/* Encouragement message based on streak */}
          <div className="leading-none text-muted-foreground">
            {streak === 0
              ? "Start your journey today!"
              : "Keep the flame burning!"}
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

export default LongestStreak
