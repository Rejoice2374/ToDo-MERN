import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"

const ProtectedRoute = () => {
  const { token } = useAuth()

  // If no token → redirect to auth
  if (!token) {
    return <Navigate to="/auth?type=sign-in" replace />
  }

  // If logged in → allow access
  return <Outlet />
}

export default ProtectedRoute
