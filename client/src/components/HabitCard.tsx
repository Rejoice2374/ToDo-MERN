import { HeartCrack, Flame, BicepsFlexed } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Badge } from "./ui/badge"
import { Button } from "@base-ui/react"

const HabitCard = ({ habit, onToggle }: Props) => {
  const isToday = habit.lastActionDate
    ? new Date(habit.lastActionDate).toDateString() ===
      new Date().toDateString()
    : false
  return (
    <Card
      className={cn(
        "cursor-pointer border-2 border-primary transition-all hover:shadow-md",
        isToday && habit.status === "won" ? "border-green-300 bg-green-50" : ""
      )}
    >
      <CardContent className="flex flex-col justify-between gap-6 px-4">
        {/* LEFT */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2
              className={cn(
                "text-xl font-medium",
                isToday && habit.status === "won"
                  ? "text-muted-foreground line-through"
                  : ""
              )}
            >
              {habit.title}
            </h2>
            {habit.category && (
              <Badge className="bg-primary/40">
                {habit.category.toLocaleUpperCase()}
              </Badge>
            )}
          </div>
          <Separator />
          <p className="text-sm text-muted-foreground">{habit.description}</p>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-between gap-3">
          {/* STREAK */}
          <div className="flex items-center gap-1 text-orange-500">
            <Flame size={18} />
            <span className="text-sm font-medium">{habit.streak}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button disabled={isToday}>
              <BicepsFlexed
                size={18}
                className={cn(
                  "cursor-pointer text-primary",
                  habit.status === "won" && "text-green-500"
                )}
                onClick={() => onToggle(habit._id!, "won")}
              />
            </Button>
            <Button disabled={isToday}>
              <HeartCrack
                size={18}
                className={cn(
                  "cursor-pointer text-primary",
                  habit.status === "conceded" && "text-red-500"
                )}
                onClick={() => onToggle(habit._id!, "conceded")}
              />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default HabitCard
