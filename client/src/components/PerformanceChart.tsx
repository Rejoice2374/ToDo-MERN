"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  Pie,
  PieChart,
  Sector,
  type PieSectorShapeProps,
} from "recharts"
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
  ChartLegend,
  ChartLegendContent,
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
    {
      browser: "relapses",
      habits: relapses ?? 0,
      fill: "var(--color-relapses)",
    },
    { browser: "wins", habits: totalWins ?? 0, fill: "var(--color-wins)" },
    {
      browser: "streak",
      habits: longestStreak ?? 0,
      fill: "var(--color-streak)",
    },
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

  // Find chartData with highest value
  const highestHabit =
    chartData.length > 0
      ? chartData.reduce((prev, curr) =>
          curr.habits > prev.habits ? curr : prev
        )
      : null

  // Find chartData index of highestHabit
  const chart_index = chartData.findIndex(
    highestHabit ? (h) => h.browser === highestHabit.browser : () => false
  )

  return (
    <section className="space-y-4">
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle className="text-lg">Performance chart</CardTitle>
          <CardDescription>
            This shows the how you have been performing in terms of wins,
            relapses and streaks. Keep up the good work and try to maintain a
            positive trend!
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
                  dataKey="habits"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                  shape={({
                    index,
                    outerRadius = 0,
                    ...props
                  }: PieSectorShapeProps) =>
                    index === chart_index ? (
                      <Sector {...props} outerRadius={outerRadius + 10} />
                    ) : (
                      <Sector {...props} outerRadius={outerRadius} />
                    )
                  }
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-lg font-bold"
                            >
                              Performance
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
                <ChartLegend
                  content={<ChartLegendContent nameKey="browser" />}
                  className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
                />
              </PieChart>
            </ChartContainer>
          )}
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 leading-none font-medium">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total habits for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

export default PerformanceChart
