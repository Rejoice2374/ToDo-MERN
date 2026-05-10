const getProgress = (habit) => {
  const createdDate = new Date(habit.createdAt)
  const dueDate = new Date(habit.dueDate)
  const today = new Date()
  const totalDays = Math.ceil((dueDate - createdDate) / (1000 * 60 * 60 * 24))
  const completedDays = Math.ceil((today - createdDate) / (1000 * 60 * 60 * 24))
  const completePercent = Math.ceil((completedDays / totalDays) * 100)
}

const createdDate = new Date("2026-04-25T22:14:39.261Z")
const dueDate = new Date("2026-05-30T00:00:00.000Z")
const today = new Date()
const totalDays = Math.ceil((dueDate - createdDate) / (1000 * 60 * 60 * 24))
const completedDays = Math.ceil((today - createdDate) / (1000 * 60 * 60 * 24))
const completePercent = Math.ceil((completedDays / totalDays) * 100)

console.log("Created Date:", createdDate)
console.log("Due Date:", dueDate)
console.log("Today:", today)
console.log("Total Days:", totalDays)
console.log("Completed Days:", completedDays)
console.log("Progress percentage:", completePercent)
