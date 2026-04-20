import AppSidebar from "@/components/App-sidebar"
import DashboardStat from "@/components/DashboardStat"
import HeaderMenu from "@/components/HeaderMenu"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useAuth } from "@/context/AuthContext"

const Dashboard = () => {
  const { user } = useAuth()
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <HeaderMenu user={user!} />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <DashboardStat />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Dashboard
