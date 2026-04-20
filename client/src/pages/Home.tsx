import AppSidebar from "@/components/App-sidebar"
import HeaderMenu from "@/components/HeaderMenu"
import HomeContent from "@/components/HomeContent"
import { useAuth } from "@/context/AuthContext"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

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
        <div className="flex flex-1 flex-col gap-4 p-4">
          <HomeContent />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Home
