import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.js"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "./components/ui/sonner.js"
import { AuthProvider } from "./context/AuthContext.js"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)
