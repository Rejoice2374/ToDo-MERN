import AppSidebar from "@/components/App-sidebar"
import CreateHabitModal from "@/components/createHabitModal"
import HabitCards from "@/components/HabitCards"
import HeaderMenu from "@/components/HeaderMenu"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"

const Habits = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("all")
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
          <SidebarTrigger className="-ml-1" />
          <HeaderMenu user={user!} />
        </header>
        <main className="flex-1 p-4 md:p-6">
          <Tabs
            defaultValue="home"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="mb-1 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <TabsList className="grid w-full max-w-150 grid-cols-5 rounded-2xl p-1">
                <TabsTrigger
                  value="all"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="personal"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger
                  value="health"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Health
                </TabsTrigger>
                <TabsTrigger
                  value="work"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Work
                </TabsTrigger>
                <TabsTrigger
                  value="addiction"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Addiction
                </TabsTrigger>
              </TabsList>
              <div className="hidden gap-2 md:flex">
                <CreateHabitModal />
              </div>
            </div>
            <div className="flex flex-col">
              <Separator className="my-1" />
              <TabsContent value="all" className="mt-0 space-y-8">
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <h2 className="text-xl font-semibold">All Habits</h2>
                  <HabitCards />
                </div>
              </TabsContent>
              <TabsContent value="personal" className="mt-0 space-y-8">
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <h2 className="text-xl font-semibold">
                    Personal development Habits
                  </h2>
                  <HabitCards category="personal" />
                </div>
              </TabsContent>
              <TabsContent value="health" className="mt-0 space-y-8">
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <h2 className="text-xl font-semibold">Health-based Habits</h2>
                  <HabitCards category="health" />
                </div>
              </TabsContent>
              <TabsContent value="work" className="mt-0 space-y-8">
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <h2 className="text-xl font-semibold">Work-related Habits</h2>
                  <HabitCards category="work" />
                </div>
              </TabsContent>
              <TabsContent value="addiction" className="mt-0 space-y-8">
                <div className="flex flex-1 flex-col gap-4 p-4">
                  <h2 className="text-xl font-semibold">
                    Addiction breaking Habits
                  </h2>
                  <HabitCards category="Addiction" />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Habits
