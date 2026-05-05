"use client"

import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
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

const CategoryChart = () => {
  const { stats, loading } = useStats()
  const personal = stats?.categoryBreakdown?.personal
  const work = stats?.categoryBreakdown?.work
  const health = stats?.categoryBreakdown?.health
  const addiction = stats?.categoryBreakdown?.addiction
  const totalHabits = stats?.totalHabits

  const chartData = [
    { browser: "personal", visitors: personal, fill: "var(--color-personal)" },
    { browser: "work", visitors: work, fill: "var(--color-work)" },
    { browser: "health", visitors: health, fill: "var(--color-health)" },
    {
      browser: "addiction",
      visitors: addiction,
      fill: "var(--color-addiction)",
    },
  ]

  const chartConfig = {
    habits: {
      label: "Habits",
    },
    personal: {
      label: "Personal",
      color: "var(--chart-1)",
    },
    work: {
      label: "Work",
      color: "var(--chart-2)",
    },
    health: {
      label: "Health",
      color: "var(--chart-3)",
    },
    addiction: {
      label: "Addiction",
      color: "var(--chart-4)",
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
                              className="fill-foreground text-3xl font-bold"
                            >
                              {totalHabits?.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Habits
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </Pie>
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

export default CategoryChart
