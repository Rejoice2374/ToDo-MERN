import { habitsStats } from "@/services/habitApi"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export const useStats = () => {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<StatsProps>()

  const getStats = async () => {
    setLoading(true)
    try {
      const data = await habitsStats()
      setStats(data)
    } catch (err) {
      toast.error("Failed to fetch your habits Stats", {
        description: (err as Error).message,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getStats()
  }, [])

  return { stats, loading }
}
