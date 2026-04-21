import { CheckCircle2, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

const HabitCard = ({ habit, onToggle }: Props) => {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:shadow-md",
        habit.completed && "border-green-300 bg-green-50"
      )}
    >
      <CardContent className="flex items-center justify-between p-4">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Checkbox
            checked={habit.completed}
            onCheckedChange={() => onToggle(habit._id)}
          />

          <div>
            <h3
              className={cn(
                "font-medium",
                habit.completed && "text-muted-foreground line-through"
              )}
            >
              {habit.title}
            </h3>

            {habit.category && (
              <p className="text-xs text-muted-foreground">{habit.category}</p>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* STREAK */}
          <div className="flex items-center gap-1 text-orange-500">
            <Flame size={18} />
            <span className="text-sm font-medium">{habit.streak}</span>
          </div>

          {/* STATUS */}
          {habit.completed && (
            <CheckCircle2 className="text-green-500" size={20} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default HabitCard
