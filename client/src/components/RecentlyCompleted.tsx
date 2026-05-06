import { useStats } from "@/hooks/useStats"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { Badge } from "./ui/badge"
import { BicepsFlexed, PackageCheck } from "lucide-react"
import { getTimeAgo } from "@/lib/utils"

const RecentlyCompleted = () => {
  const { stats, loading } = useStats()
  const recentCompletes = stats?.recentlyCompleted
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Recently Completed</h2>
        <Button variant="ghost" className="rounded-2xl">
          View All
        </Button>
      </div>
      {loading ? (
        <p>Loading habits...</p>
      ) : (
        <div className="rounded-3xl border">
          {recentCompletes && recentCompletes.length != 0 ? (
            <div className="grid grid-cols-1 divide-y">
              {recentCompletes?.slice(0, 4).map((file, index) => (
                <motion.div
                  key={index}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                  className="flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-muted">
                      <PackageCheck />
                    </div>
                    <div>
                      <p className="font-medium">{file.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.status} • {file.completedAt && getTimeAgo(file.completedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.wins && (
                      <Badge variant="outline" className="rounded-xl">
                        <BicepsFlexed className="mr-1 h-3 w-3" />
                        <span>{file.wins}</span>
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      Open
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div> /* 3. Handle Empty State */
          ) : (
            <p className="text-muted-foreground italic">
              Nothing due in the next 24 hours!
            </p>
          )}
        </div>
      )}
    </section>
  )
}

export default RecentlyCompleted
