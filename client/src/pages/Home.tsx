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
import CategoryChart from "@/components/CategoryChart"
import LongestStreak from "@/components/LongestStreak"

const Home = () => {
  const { user } = useAuth()
  console.log(user)

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-100 flex h-16 shrink-0 transform-gpu items-center gap-2 border-b bg-background px-4">
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
        {/* Dashboard widgets */}
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-6">
          {/* Categories Chart */}
          <CategoryChart />
          {/* Longest streak */}
          <LongestStreak />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Home
