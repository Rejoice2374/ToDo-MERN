import {
  Bell,
  Moon,
  Sun,
  MessageSquare,
  Sparkles,
  UserRound,
  BadgeCheck,
  LogOut,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useTheme } from "@/components/theme-provider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useAuth } from "@/context/AuthContext"

const HeaderMenu = ({ user }: Userprops) => {
  const { logout } = useAuth()
  const { theme, setTheme } = useTheme()
  const showBadgeValue = 0 // This should come from your state or props
  const HEADER_ACTIONS = [
    {
      // Toggle icon based on current theme
      icon: theme === "dark" ? Sun : Moon,
      label: theme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
    { icon: MessageSquare, label: "Messages" },
    {
      icon: Bell,
      label: "Notifications",
      showBadge: true,
      badgeCount: showBadgeValue,
    },
  ]
  return (
    <div className="flex flex-1 items-center justify-between">
      <h1 className="text-xl md:text-2xl">
        Habit<span className="font-bold">Check</span>
      </h1>

      <div className="flex items-center gap-2 md:gap-3">
        <TooltipProvider>
          {HEADER_ACTIONS.map((action) => {
            const Icon = action.icon
            return (
              // Menu Items
              <Tooltip key={action.label}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative rounded-2xl"
                    onClick={action.onClick}
                  >
                    <Icon className="h-5 w-5" />
                    {action.showBadge && (
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                        {action.badgeCount}
                      </span>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{action.label}</TooltipContent>
              </Tooltip>
            )
          })}
        </TooltipProvider>

        {/* User Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger aschild className="w-full">
            <Avatar className="h-9 w-9 border-2 border-primary">
              <AvatarImage src={user?.avatar} alt={user?.firstName} />
              <AvatarFallback className="rounded-full text-primary">
                {user?.firstName?.[0]}
                {user?.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserRound />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BadgeCheck />
                Badges
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default HeaderMenu
