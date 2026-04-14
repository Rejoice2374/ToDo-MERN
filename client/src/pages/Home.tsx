import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex items-center justify-center mb-6">
        <img
        src={Logo}
        alt="HabitCheck Logo"
        />
        <h1 className='text-[60px]'>Habit<span className='font-bold'>Check</span></h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className='text-3xl font-medium'>Welcome to Habit Check</h1>
        <p className="mt-2 text-[18px] font-normal">
          Turn your daily habits into a game.
          Complete tasks, build streaks, level up your life.
          Ready to check in?
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-primary hover:bg-transparent
         hover:border-2 border-primary px-4 py-2 rounded" onClick={() => navigate("/auth")}>
          Get Started
        </button>
        <button className="border-2 border-primary hover:bg-primary px-4 py-2 rounded" onClick={() => navigate("/auth")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Home;