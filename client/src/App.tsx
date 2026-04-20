import { BrowserRouter, Routes, Route } from "react-router-dom"

import Welcome from "./pages/Welcome"
import Home from "./pages/Home"
import AuthPage from "./pages/Auth"
import Dashboard from "./pages/Dashboard"
import Habits from "./pages/Habits"
import ProtectedRoute from "./components/ProtectedRoutes"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/habits" element={<Habits />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
