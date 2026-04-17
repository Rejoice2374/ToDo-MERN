import { createContext, useContext, useState, useEffect } from "react"
import API from "@/services/api"

const AuthContext = createContext<AuthContextType | null>(null)

// PROVIDER
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  )

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
  }

  // 🔥 Fetch user on app load
  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return

      try {
        const res = await API.get("/auth/user")
        setUser(res.data)
      } catch (err) {
        console.error(err)
        logout() // invalid token
      }
    }

    fetchUser()
  }, [token])

  // 🔐 LOGIN
  const login = async (newToken: string) => {
    localStorage.setItem("token", newToken)
    setToken(newToken)

    // fetch user after login
    const res = await API.get("/auth/user")
    setUser(res.data)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// CUSTOM HOOK
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
