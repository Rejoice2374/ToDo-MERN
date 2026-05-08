import CreateHabitModal from "./createHabitModal"
import HabitCard from "./HabitCard"
import { useHabits } from "@/hooks/useHabits"

interface HabitCardsProps {
  limit?: number
  category?: string
}

const HabitCards = ({ limit, category }: HabitCardsProps) => {
  const { habits, loading, updateHabitStatus } = useHabits()

  // Filter habits by Category if provided
  const filteredHabits = category
    ? (habits || []).filter((h) => h.category === category)
    : habits

  // Slice filteredHabits by limit if provided
  const displayedHabits = limit
    ? filteredHabits.slice(0, limit)
    : filteredHabits

  return (
    <div className="flex flex-col gap-6">
      {loading ? (
        <p>Loading habits...</p>
      ) : habits.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="mb-4 text-muted-foreground">
            No habits yet. Create one now 👇
          </p>

          {/* 🔥 Add Create Habit Button */}
          <CreateHabitModal />
        </div>
      ) : displayedHabits.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="mb-4 text-muted-foreground">
            You have no habits in the {category} category. Create one now 👇
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {displayedHabits.map((habit) => (
            <HabitCard
              key={habit._id}
              habit={habit}
              onToggle={updateHabitStatus}
            />
          ))}
          {displayedHabits.length > 0 && (
            <div className="flex md:hidden">
              <CreateHabitModal />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default HabitCards
