import { useStats } from "@/hooks/useStats"

const LongestStreak = () => {
  const { stats, loading } = useStats()
  console.log(loading)
  console.log(stats)

  return (
    <>
      <div className="flex">
        <div>🔥 Longest Streak: {stats?.performance?.longestStreak}</div>
      </div>
    </>
  )
}

export default LongestStreak
