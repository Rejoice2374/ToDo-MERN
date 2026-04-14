import { useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-background">
      <div className="mb-6 flex items-center justify-center">
        <img src={Logo} alt="HabitCheck Logo" />
        <h1 className="text-[60px]">
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
          onClick={() => navigate("/auth")}
        >
          Get Started
        </button>
        <button
          className="rounded border-2 border-primary px-4 py-2 hover:bg-primary"
          onClick={() => navigate("/auth")}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Home
