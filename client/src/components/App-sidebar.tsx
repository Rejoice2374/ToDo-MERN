import NavUser from "@/components/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { useAuth } from "@/context/AuthContext"
import Logo from "@/assets/logo.png"
import { Input } from "./ui/input"
import { Search } from "lucide-react"
import { sidebarLinks } from "@/constants"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

const AppSidebar = ({ ...props }: sideBarProps) => {
  const { user } = useAuth()
  const location = useLocation()
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <div className="*: flex items-center gap-2">
          <img src={Logo} alt="HabitCheck Logo" className="w-14 object-cover" />
          <h1 className="text-2xl">
            Habit<span className="font-bold">Check</span>
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator className="mx-0" />
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute top-2 left-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-2xl bg-muted py-2 pr-4 pl-9"
            />
          </div>
        </div>
        <SidebarSeparator className="mx-0" />
        <div className="flex-1 space-y-1">
          {sidebarLinks.map((item) => {
            const isActive =
              location.pathname === item.route ||
              location.pathname.startsWith(`${item.route}/`)
            return (
              <Link
                key={item.label}
                to={item.route}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted",
                  isActive && "bg-primary/10 text-primary"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon />
                  <span>{item.label}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            {user && <NavUser user={user} />}
            {/* <NavUser user={user!} /> - This means we definitely have a user*/}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
