import {
  LayoutDashboard,
  CalendarHeart,
  HeartHandshake,
  HomeIcon,
} from "lucide-react"

export const sidebarLinks = [
  {
    icon: HomeIcon,
    route: "/home",
    label: "Home",
  },
  {
    icon: LayoutDashboard,
    route: "/dashboard",
    label: "Dashboard",
  },
  {
    icon: CalendarHeart,
    route: "/habits",
    label: "My Habits",
  },
  {
    icon: HeartHandshake,
    route: "/completed-habits",
    label: "Completed Habits",
  },
]

export const categoryColors: Record<string, string> = {
  work: "bg-green-100 text-green-800",
  personal: "bg-blue-100 text-blue-800",
  health: "bg-purple-100 text-purple-800",
  addiction: "bg-yellow-100 text-yellow-800",
}
