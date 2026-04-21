import API from "./api"

// GET all habits
export const getHabits = async () => {
  const res = await API.get("/habits")
  return res.data
}

// UPDATE habit status
export const updateHabitStatus = async (id: string) => {
  const res = await API.put(`/habits/${id}/status`)
  return res.data
}

// UPDATE habit
export const editHabit = async (id: string, data: HabitsProps) => {
  const res = await API.put(`/habits/${id}`, data)
  return res.data
}

// CREATE habit
export const createHabit = async (data: HabitsProps) => {
  const res = await API.post("/habits", data)
  return res.data
}

// DELETE habit
export const deleteHabit = async (id: string) => {
  const res = await API.delete(`/habits/${id}`)
  return res.data
}
