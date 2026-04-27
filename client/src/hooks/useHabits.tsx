import { createContext, useContext, useEffect, useState } from "react"
import {
  getHabits,
  updateHabitStatus as toggleHabitAPI,
  createHabit,
  editHabit,
  deleteHabit,
} from "@/services/habitApi"
import { toast } from "sonner"

const HabitContext = createContext<HabitsContextType | null>(null)

export const HabitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [habits, setHabits] = useState<HabitsProps[]>([])
  const [loading, setLoading] = useState(true)

  // 🔥 FETCH HABITS
  const fetchHabits = async () => {
    try {
      const data = await getHabits()
      setHabits(data)
    } catch (err) {
      toast.error("Failed to fetch habits", {
        description: (err as Error).message,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  // ⚡ TOGGLE (Optimistic UI)
  const updateHabitStatus = async (id: string, status: "won" | "conceded") => {
    const previousHabit = habits.find((h) => h._id === id)
    setHabits((prev) => prev.map((h) => (h._id === id ? { ...h, status } : h)))
    try {
      const updated = await toggleHabitAPI(id, { status })

      toast.success("Habit status updated")
      if (!updated) {
        toast.error("Failed to update habit status", {
          description: updated?.message || "Unknown error",
        })
      }
    } catch (err) {
      // rollback if error
      // 3. Rollback on failure
      if (previousHabit) {
        setHabits((prev) => prev.map((h) => (h._id === id ? previousHabit : h)))
      }
      toast.error("Failed to update habit", {
        description: (err as Error).message,
      })
    }
  }

  // 🔥 ADD NEW HABIT (Optimistic UI) and push to api
  const addHabit = async (habit: HabitsProps) => {
    // 1. instant UI update with temp ID
    const tempId = `temp-${Date.now()}`
    const newHabit = { ...habit, _id: tempId, completed: false, streak: 0 }
    setHabits((prev) => [newHabit, ...prev])

    try {
      const createdHabit = await createHabit(habit)
      // Replace temp ID with actual ID
      setHabits((prev) =>
        prev.map((h) => (h._id === tempId ? { ...createdHabit } : h))
      )
    } catch (err) {
      // Remove temp habit if creation fails
      setHabits((prev) => prev.filter((h) => h._id !== tempId))
      toast.error("Failed to create habit", {
        description: (err as Error).message,
      })
    }
  }

  // 🔥 EDIT HABIT (Optimistic UI)
  const updateHabit = async (id: string, data: HabitsProps) => {
    // 1. instant UI update
    setHabits((prev) => prev.map((h) => (h._id === id ? { ...h, ...data } : h)))

    try {
      await editHabit(id, data)
    } catch (err) {
      // rollback if error
      setHabits((prev) =>
        prev.map((h) => (h._id === id ? { ...h, ...data } : h))
      )
      toast.error("Failed to edit habit", {
        description: (err as Error).message,
      })
    }
  }

  // 🔥 DELETE HABIT (Optimistic UI)
  const removeHabit = async (id: string) => {
    // 1. Find and store the habit before we remove it
    const habitToRestore = habits.find((h) => h._id === id)

    // If for some reason the habit doesn't exist in local state, stop early
    if (!habitToRestore) return

    // 2. Instant UI update (Remove from state)
    setHabits((prev) => prev.filter((h) => h._id !== id))

    try {
      await deleteHabit(id)
      toast.success("Habit deleted")
    } catch (err) {
      // 3. Rollback: Put the EXACT habit back into the list
      setHabits((prev) => [...prev, habitToRestore])

      toast.error("Failed to delete habit", {
        description: (err as Error).message,
      })
    }
  }

  return (
    <HabitContext.Provider
      value={{
        habits,
        loading,
        updateHabitStatus,
        addHabit,
        updateHabit,
        removeHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  )
}

// CUSTOM HOOK
export const useHabits = () => {
  const context = useContext(HabitContext)
  if (!context) throw new Error("UseHabits must be used within HabitsProvider")
  return context
}
