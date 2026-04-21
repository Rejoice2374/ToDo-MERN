import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
// import { createHabit } from "@/services/habitApi"
import { toast } from "sonner"
import { useHabits } from "@/hooks/useHabits"

type Priority = "low" | "medium" | "high"

interface HabitForm {
  title: string
  description: string
  habitualTime: string
  dueDate: string
  priority: Priority // Use the specific type here
  category: string
}

const CreateHabitModal = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { addHabit } = useHabits() // 🔥 get addHabit from context

  const [form, setForm] = useState<HabitForm>({
    title: "",
    description: "",
    habitualTime: "",
    dueDate: "",
    priority: "medium",
    category: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.title.trim()) {
      toast.error("Title is required")
      return
    }

    try {
      setLoading(true)

      // const newHabit = await createHabit(form)

      const newHabit = addHabit(form) // 🔥 update UI instantly
      toast.success("Habit created 🎉")

      // reset form
      setForm({
        title: "",
        description: "",
        habitualTime: "",
        dueDate: "",
        priority: "medium",
        category: "",
      })
      setOpen(false)
      return newHabit
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to create habit")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add Habit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Habit</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Habit Title</Label>
            <Input
              name="title"
              placeholder="e.g. Drink Water"
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Habit Description</Label>
            <Input
              name="description"
              placeholder="e.g. Drink 8 glasses of water daily"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Habitual Time</Label>
            <Input
              name="habitualTime"
              placeholder="e.g. 30 minutes"
              value={form.habitualTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Due Date</Label>
            <Input
              name="dueDate"
              type="date"
              value={form.dueDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Priority</Label>
            <Input
              name="priority"
              placeholder="e.g. High, Medium, Low"
              value={form.priority}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Category</Label>
            <Input
              name="category"
              placeholder="e.g. Health"
              value={form.category}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Creating..." : "Create Habit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateHabitModal
