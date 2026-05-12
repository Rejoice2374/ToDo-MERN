import AppSidebar from "@/components/App-sidebar"
import HeaderMenu from "@/components/HeaderMenu"
import HabitCards from "@/components/HabitCards"
import { useAuth } from "@/context/AuthContext"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const CompletedHabits = () => {
  const { user } = useAuth()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-100 flex h-16 shrink-0 transform-gpu items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <HeaderMenu user={user!} />
        </header>
        <div className="flex flex-col gap-4 p-4">
          <div className="space-y-4 p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Completed Habits</h2>
            </div>
            <HabitCards completed={true} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default CompletedHabits
