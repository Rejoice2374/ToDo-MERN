import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.js"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "./components/ui/sonner.js"
import { AuthProvider } from "./context/AuthContext.js"
import { HabitsProvider } from "@/hooks/useHabits.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <HabitsProvider>
        <ThemeProvider defaultTheme="light" storageKey="theme">
          <App />
          <Toaster />
        </ThemeProvider>
      </HabitsProvider>
    </AuthProvider>
  </StrictMode>
)
