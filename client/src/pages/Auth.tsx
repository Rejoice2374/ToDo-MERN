import AuthForm from "@/components/Auth-form"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const AuthPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      navigate("/home")
    }
  }, [])

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <AuthForm />
      </div>
    </div>
  )
}

export default AuthPage
