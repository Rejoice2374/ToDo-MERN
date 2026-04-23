import { CheckCircle2, HeartCrack, Flame, BicepsFlexed } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const HabitCard = ({ habit, onToggle }: Props) => {
  return (
    <Card
      className={cn(
        "cursor-pointer border-2 transition-all hover:shadow-md",
        habit.status === "won" && "border-green-300 bg-green-50"
      )}
    >
      <CardContent className="flex flex-col justify-between gap-6 px-4">
        {/* LEFT */}
        <div className="flex flex-col gap-1">
          <h2
            className={cn(
              "text-2xl font-medium",
              habit.status === "won" && "text-muted-foreground line-through"
            )}
          >
            {habit.title}
          </h2>

          {habit.category && (
            <p className="text-muted-foreground">
              {habit.category.toLocaleUpperCase()}
            </p>
          )}
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
            <BicepsFlexed
              size={18}
              className={cn(
                "text-blue-500",
                habit.status === "won" && "text-green-500"
              )}
              onClick={() => onToggle(habit._id!, "won")}
            />
            <HeartCrack
              size={18}
              className={cn(
                "text-blue-500",
                habit.status === "relapsed" && "text-red-500"
              )}
              onClick={() => onToggle(habit._id!, "conceded")}
            />
          </div>
          {/* STATUS */}
          {habit.status === "won" && (
            <CheckCircle2 className="text-green-500" size={20} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default HabitCard
