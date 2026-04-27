import CreateHabitModal from "./createHabitModal"
import HabitCard from "./HabitCard"
import { UseHabits } from "@/hooks/useHabits"

const HabitCards = () => {
  const { habits, loading, updateHabitStatus } = UseHabits()

  if (loading) {
    return <p>Loading habits...</p>
  }
  if (!habits.length) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <p className="mb-4 text-muted-foreground">
          No habits yet. Start building one 🚀
        </p>

        {/* 🔥 Add Create Habit Button */}
        <CreateHabitModal />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {habits.map((habit) => (
        <HabitCard key={habit._id} habit={habit} onToggle={updateHabitStatus} />
      ))}
    </div>
  )
}

export default HabitCards
