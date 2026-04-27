import AppSidebar from "@/components/App-sidebar"
import HeaderMenu from "@/components/HeaderMenu"
import HomeContent from "@/components/HomeContent"
import HabitCards from "@/components/HabitCards"
import { useAuth } from "@/context/AuthContext"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

const Home = () => {
  const { user } = useAuth()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <HeaderMenu user={user!} />
        </header>
        <div className="flex flex-col gap-4 p-4">
          <HomeContent />
          <div className="space-y-4 p-4 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Recent Habits</h2>
              <Button
                variant="ghost"
                className="rounded-2xl border-2 border-primary"
              >
                View All
              </Button>
            </div>
            <HabitCards limit={3} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Home
