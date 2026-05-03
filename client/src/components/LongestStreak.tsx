import { useStats } from "@/hooks/useStats"

const LongestStreak = () => {
  const { stats, loading } = useStats()
  console.log(loading)
  console.log(stats)

  return (
    <>
      <div className="flex">
        <h1>longest Streak</h1>
      </div>
    </>
  )
}

export default LongestStreak
