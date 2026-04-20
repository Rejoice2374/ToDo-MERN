import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"

const HABIT_QUOTES = [
  {
    text: "Consistency is what transforms average into excellence.",
    author: "Favochino",
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
  },
  {
    text: "Small habits, if practiced daily, lead to massive change over time.",
    author: "James Clear",
  },
  {
    text: "Motivation is what gets you started. Habit is what keeps you going.",
    author: "Jim Ryun",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
]

const Banner = () => {
  const [index, setIndex] = useState(0)

  // Rotate quotes every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HABIT_QUOTES.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Animated gradient background */}
      <motion.div
        className="inset-0 flex flex-col justify-center rounded-2xl p-8 md:h-72"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.4) 0%, rgba(53, 71, 125, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(233, 30, 99, 0.4) 0%, rgba(81, 45, 168, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.4) 0%, rgba(32, 119, 188, 0.4) 50%, rgba(0, 0, 0, 0) 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="flex flex-col space-y-6 text-center">
          <h2 className="text-3xl font-bold">Welcome to HabitCheck</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mx-auto hidden h-27 max-w-2xl space-y-4 text-center md:block"
            >
              <h2 className="text-2xl font-medium tracking-tight text-foreground italic md:text-3xl">
                "{HABIT_QUOTES[index].text}"
              </h2>
              <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                — {HABIT_QUOTES[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button className="rounded-2xl bg-white text-indigo-700 hover:bg-white/60">
              Create Task
            </Button>
            <Button
              variant="outline"
              className="rounded-2xl border-white bg-transparent text-white hover:bg-white/50"
            >
              View Tasks
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Banner
