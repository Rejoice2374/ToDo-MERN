"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart"
import { useStats } from "@/hooks/useStats"

const PerformanceChart = () => {
  const { stats, loading } = useStats()
  const relapses = stats?.performance?.totalRelapses
  const totalWins = stats?.performance?.totalWins
  const longestStreak = stats?.performance?.longestStreak
  const recentCompletes = stats?.recentlyCompleted

  console.log(stats)
  console.log(recentCompletes)

  const chartData = [
    { browser: "Relapses", visitors: relapses, fill: "var(--color-relapses)" },
    { browser: "Wins", visitors: totalWins, fill: "var(--color-wins)" },
    { browser: "Streak", visitors: longestStreak, fill: "var(--color-streak)" },
  ]

  const chartConfig = {
    habits: {
      label: "Habits",
    },
    relapses: {
      label: "Relapses",
      color: "var(--chart-1)",
    },
    wins: {
      label: "Wins",
      color: "var(--chart-2)",
    },
    streak: {
      label: "Streak",
      color: "var(--chart-3)",
    },
  } satisfies ChartConfig

  return (
    <section className="space-y-4">
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Category chart</CardTitle>
          <CardDescription>
            This shows the category you are most interested in improving
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          {loading ? (
            <div>
              <p>Loading chart...</p>
            </div>
          ) : (
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-62.5"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                ></Pie>
              </PieChart>
            </ChartContainer>
          )}
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

export default PerformanceChart
