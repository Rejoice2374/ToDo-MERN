import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AuthPage from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Habits from "./pages/Habits"
import CompletedHabits from "./pages/CompletedHabits"
import ProtectedRoute from "./components/ProtectedRoutes"
import "./index.css"
import Landing from "./pages/Landing"
import { HabitsProvider } from "@/hooks/useHabits.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={
              <HabitsProvider>
                <Home />
              </HabitsProvider>
            }
          />
          <Route
            path="/dashboard"
            element={
              <HabitsProvider>
                <Dashboard />
              </HabitsProvider>
            }
          />
          <Route
            path="/habits"
            element={
              <HabitsProvider>
                <Habits />
              </HabitsProvider>
            }
          />
          <Route
            path="/completed"
            element={
              <HabitsProvider>
                <CompletedHabits />
              </HabitsProvider>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
