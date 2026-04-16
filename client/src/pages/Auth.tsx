import AuthForm from "@/components/Auth-form"

const AuthPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <AuthForm />
      </div>
    </div>
  )
}

export default AuthPage

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import Logo from "../assets/Logo.png"

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true)

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background">
//       <div className="absolute top-10 flex w-20 items-center justify-center">
//         <img src={Logo} alt="HabitCheck Logo" />
//         <h1 className="text-[40px]">
//           Habit<span className="font-bold">Check</span>
//         </h1>
//       </div>
//       <Card className="w-full max-w-160 rounded-2xl shadow-2xl lg:max-w-210">
//         <CardHeader className="p-6 font-heading">
//           <CardTitle className="text-center text-2xl font-bold">
//             {isLogin ? "Welcome Back" : "Join NoDo"}
//           </CardTitle>
//           <p className="text-center text-sm text-muted-foreground">
//             {isLogin
//               ? "Keep fighting your habits"
//               : "Start your journey to self-control"}
//           </p>
//         </CardHeader>

//         <div className="contact">
//           <CardContent>
//             <form className="space-y-4">
//               {/* REGISTER ONLY */}
//               {!isLogin && (
//                 <>
//                   <div>
//                     <Label>First Name</Label>
//                     <Input placeholder="John" />
//                   </div>

//                   <div>
//                     <Label>Last Name</Label>
//                     <Input placeholder="Doe" />
//                   </div>
//                 </>
//               )}

//               {/* EMAIL */}
//               <div>
//                 <Label>Email</Label>
//                 <Input type="email" placeholder="you@example.com" />
//               </div>

//               {/* PASSWORD */}
//               <div>
//                 <Label>Password</Label>
//                 <Input type="password" placeholder="••••••••" />
//               </div>

//               {/* BUTTON */}
//               <Button className="w-full">
//                 {isLogin ? "Login" : "Create Account"}
//               </Button>
//             </form>

//             {/* TOGGLE */}
//             <p className="mt-4 text-center text-sm">
//               {isLogin ? "Don't have an account?" : "Already have an account?"}
//               <span
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="ml-1 cursor-pointer font-semibold text-primary"
//               >
//                 {isLogin ? "Sign up" : "Login"}
//               </span>
//             </p>
//           </CardContent>
//         </div>
//       </Card>
//     </div>
//   )
// }

// export default Auth
