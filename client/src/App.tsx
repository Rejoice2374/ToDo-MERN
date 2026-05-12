import { BrowserRouter, Routes, Route } from "react-router-dom"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import AuthPage from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Habits from "./pages/Habits"
import CompletedHabits from "./pages/CompletedHabits"
import ProtectedRoute from "./components/ProtectedRoutes"
import "./index.css"
import Landing from "./pages/Landing"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/completed" element={<CompletedHabits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
