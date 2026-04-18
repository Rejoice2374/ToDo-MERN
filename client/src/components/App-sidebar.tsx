import * as React from "react"
import { Plus } from "lucide-react"
import Classifications from "@/components/Classification"
import NavUser from "@/components/NavUser"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { useAuth } from "@/context/AuthContext"

// This is sample data.
const data = {
  classification: [
    {
      name: "Status",
      items: ["Fighting", "Won", "Conceded"],
    },
    {
      name: "Priority",
      items: ["Low", "Medium", "High"],
    },
    {
      name: "Category",
      items: ["Work", "Personal", "Health", "Addiction"],
    },
  ],
}

const AppSidebar = ({ ...props }: sideBarProps) => {
  const { user } = useAuth()
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        {user && <NavUser user={user} />}
        {/* <NavUser user={user!} /> - This means we */}
      </SidebarHeader>
      <SidebarContent>
        <SidebarSeparator className="mx-0" />
        <Classifications classifications={data.classification} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar
