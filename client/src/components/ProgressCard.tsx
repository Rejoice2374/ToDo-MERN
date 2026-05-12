import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { FileText, Users } from "lucide-react"

const ProgressCard = ({ habits, limit }: ProgressCardProps) => {
  return (
    <div className="grid grid-cols-1 divide-y">
      {habits ? (
        habits?.slice(0, limit).map((project) => {
          const createdDate = project.createdAt
            ? new Date(project.createdAt)
            : new Date()
          const dueDate = project.dueDate
            ? new Date(project.dueDate)
            : new Date()
          const today = new Date()
          const totalDays = Math.ceil(
            (dueDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
          )
          const completedDays = Math.ceil(
            (today.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
          )
          const completePercent = totalDays
            ? Math.ceil((completedDays / totalDays) * 100)
            : 0

          console.log("Created Date:", createdDate)
          console.log("Due Date:", dueDate)
          console.log("Today:", today)
          console.log("Total Days:", totalDays)
          console.log("Completed Days:", completedDays)
          console.log("Progress percentage:", completePercent)

          return (
            <motion.div
              key={project.title}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              className="p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">{project.title}</h3>
                <Badge variant="outline" className="rounded-xl">
                  Due:{"  "}
                  {project.dueDate
                    ? new Date(project.dueDate).toLocaleDateString()
                    : "N/A"}
                </Badge>
              </div>
              <p className="mb-3 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span>{completePercent}%</span>
                </div>
                <Progress value={completePercent} className="h-2 rounded-xl" />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  {project.wins} wins
                </div>
                <div className="flex items-center">
                  <FileText className="mr-1 h-4 w-4" />
                  {project.relapseCount} Relapse
                </div>
              </div>
            </motion.div>
          )
        })
      ) : (
        <p className="text-muted-foreground italic">
          No Active Habits available. Create one now
        </p>
      )}
    </div>
  )
}

export default ProgressCard
