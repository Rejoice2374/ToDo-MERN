import { useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { useEffect } from "react"

const Welcome = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      navigate("/home")
    }
  }, [])

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background">
      <div className="md-4 flex items-center justify-center md:mb-6">
        <img
          src={Logo}
          alt="HabitCheck Logo"
          className="w-16 object-cover md:w-24"
        />
        <h1 className="text-[40px] md:text-[60px]">
          Habit<span className="font-bold">Check</span>
        </h1>
      </div>
      <div className="flex w-80 flex-col items-center text-center">
        <p className="mt-2 text-[18px] font-normal">
          Turn your daily habits into a game. Complete tasks, build streaks,
          level up your life. Ready to check in?
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          className="rounded border-primary bg-primary px-4 py-2 hover:border-2 hover:bg-transparent"
          onClick={() => navigate("/auth?type=sign-up")}
        >
          Get Started
        </button>
        <button
          className="rounded border-2 border-primary px-4 py-2 hover:bg-primary"
          onClick={() => navigate("/auth?type=sign-in")}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Welcome
