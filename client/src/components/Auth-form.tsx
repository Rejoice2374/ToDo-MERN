import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Logo from "../assets/Logo.png"
import { ArrowRight } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import API from "@/services/api"
import { toast } from "sonner"
import { Eye, EyeOff } from "lucide-react"

const AuthForm = ({ className, ...props }: React.ComponentProps<"div">) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const type = searchParams.get("type")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [isLogin, setIsLogin] = useState(type === "sign-in")

  const toggleMode = () => {
    const newMode = isLogin ? "sign-up" : "sign-in"
    setIsLogin(!isLogin)
    navigate(`/auth?type=${newMode}`)
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      if (!isLogin) {
        // REGISTER
        if (formData.password !== formData.confirmPassword) {
          toast.error("Passwords do not match")
          setIsLoading(false)
          return
        }

        const res = await API.post("/auth/register", {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        })

        localStorage.setItem("token", res.data.token)
        toast.success("Registration successful")
        navigate("/dashboard")
      } else {
        // LOGIN
        const res = await API.post("/auth/login", {
          email: formData.email,
          password: formData.password,
        })

        localStorage.setItem("token", res.data.token)
        toast.success("Login successful")
        navigate("/dashboard")
      }
    } catch (error: any) {
      setIsLoading(false)
      console.error(error)
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        {/* SIGNUP & SIGNIN FORM */}
        <CardContent className="grid p-0 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center p-6 md:p-8"
          >
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="block w-60 object-cover md:hidden dark:brightness-[0.2] dark:grayscale"
                />
                <h1 className="text-2xl font-bold">
                  {isLogin ? "Welcome Back" : "Create your account"}
                </h1>
                <p className="text-sm text-balance text-muted-foreground">
                  {isLogin
                    ? "Welcome back! Please enter your details."
                    : "Create your account. Enter your details below."}
                </p>
              </div>
              {!isLogin && (
                <>
                  <Field>
                    <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      required
                      onChange={handleChange}
                      value={formData.firstName}
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                      onChange={handleChange}
                      value={formData.lastName}
                    />
                  </Field>
                </>
              )}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  onChange={handleChange}
                  value={formData.email}
                />
              </Field>
              <Field>
                <Field
                  className={`grid gap-4 ${isLogin ? "" : "md:grid-cols-2"}`}
                >
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        onChange={handleChange}
                        value={formData.password}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-sm text-muted-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </span>
                    </div>
                  </Field>
                  {!isLogin && (
                    <Field>
                      <FieldLabel htmlFor="confirm-password">
                        Confirm Password
                      </FieldLabel>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          type={showPassword ? "text" : "password"}
                          required
                          onChange={handleChange}
                          value={formData.confirmPassword}
                        />
                        <span
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-sm text-muted-foreground"
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </span>
                      </div>
                    </Field>
                  )}
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="cursor-pointer"
                >
                  {isLoading
                    ? isLogin
                      ? "Logging in..."
                      : "Creating account..."
                    : isLogin
                      ? "Login"
                      : "Create Account"}
                </Button>
              </Field>
              <FieldDescription className="text-center">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <span
                  onClick={toggleMode}
                  className="ml-1 cursor-pointer font-semibold text-primary"
                >
                  {isLogin ? "Sign up" : "Login"}
                </span>
              </FieldDescription>
            </FieldGroup>
          </form>
          {/* SIDE IMAGE */}
          <div className="relative hidden flex-col items-center justify-center gap-20 bg-muted p-10 md:flex">
            <div className="flex flex-col">
              <h1 className="mb-4 font-heading text-4xl font-bold text-primary">
                Introducing the ultimate habit tracker
              </h1>
              <p className="pr-4 text-[18px] text-muted-foreground">
                Monitor your progress and build better habits. Be the best
                version of yourself with HabitCheck.
              </p>
              <a
                href="/about"
                className="mt-4 w-fit border-primary font-medium text-primary hover:border-b"
              >
                Learn more <ArrowRight className="inline" />
              </a>
            </div>
            <div className="mb-6 flex items-center justify-center">
              <img
                src={Logo}
                alt="HabitCheck Logo"
                className="w-24 object-cover dark:brightness-[1] dark:grayscale"
              />
              <h1 className="text-5xl">
                Habit<span className="font-bold">Check</span>
              </h1>
            </div>
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}

export default AuthForm
