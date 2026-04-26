import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
// import { createHabit } from "@/services/habitApi"
import { toast } from "sonner"
import { useHabits } from "@/hooks/useHabits"

type Priority = "low" | "medium" | "high"
type Category = "work" | "health" | "personal" | "addiction"

interface HabitForm {
  title: string
  description: string
  habitualTime: string
  dueDate: Date
  priority: Priority // Use the specific type here
  category: Category // Use the specific type here
}

const CreateHabitModal = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const { addHabit, fetchHabits } = useHabits() // 🔥 get addHabit from context

  const [form, setForm] = useState<HabitForm>({
    title: "",
    description: "",
    habitualTime: "",
    dueDate: new Date(),
    priority: "medium",
    category: "personal",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        dueDate: new Date(),
        priority: "medium",
        category: "personal",
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
      <DialogTrigger>
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
              className="border border-primary focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Label>Habit Description</Label>
            <Input
              name="description"
              placeholder="e.g. Drink 8 glasses of water daily"
              value={form.description}
              onChange={handleChange}
              className="border border-primary focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Label>Habitual Time</Label>
            <Input
              name="habitualTime"
              placeholder="e.g. 30 minutes"
              value={form.habitualTime}
              onChange={handleChange}
              className="border border-primary focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <Label>Due Date</Label>
            <Input
              name="dueDate"
              type="date"
              value={
                form.dueDate instanceof Date
                  ? form.dueDate.toISOString().split("T")[0]
                  : form.dueDate
              }
              onChange={handleChange}
              className="border border-primary focus:ring-2 focus:ring-primary"
            />
          </div>
          {/* PRIORITY */}
          <div>
            <Label>Priority</Label>

            <Select
              value={form.priority}
              onValueChange={(value) =>
                setForm({ ...form, priority: value as Priority })
              }
            >
              <SelectTrigger className="mt-2 w-full rounded-md border border-primary p-2 focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="low">🟢 Low</SelectItem>
                <SelectItem value="medium">🟡 Medium</SelectItem>
                <SelectItem value="high">🔴 High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* CATEGORY */}
          <div>
            <Label>Category</Label>

            <Select
              value={form.category}
              onValueChange={(value) =>
                setForm({ ...form, category: value as Category })
              }
            >
              <SelectTrigger className="mt-2 w-full rounded-md border border-primary p-2 focus:ring-2 focus:ring-primary">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="work">💼 Work</SelectItem>
                <SelectItem value="health">💪 Health</SelectItem>
                <SelectItem value="personal">📚 Personal</SelectItem>
                <SelectItem value="addiction">🚫 Addiction</SelectItem>
              </SelectContent>
            </Select>
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
