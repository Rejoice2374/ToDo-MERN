import * as React from "react"
import { ChevronRight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { FieldLabel } from "@/components/ui/field"

const Classifications = ({ classifications }: classificationProps) => {
  return (
    <>
      {classifications.map((classification, index) => (
        <React.Fragment key={classification.name}>
          <SidebarGroup key={classification.name} className="py-0">
            <Collapsible
              defaultOpen={index === 0}
              className="group/collapsible"
            >
              <SidebarGroupLabel className="group/label w-full text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <CollapsibleTrigger className="flex items-center rounded-sm px-2 py-1">
                  {classification.name}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {classification.items.map((item) => {
                      const id = `${classification.name}-${item}`
                      return (
                        <SidebarMenuItem key={item}>
                          <SidebarMenuButton>
                            <Checkbox id={id} name="terms-checkbox-basic" />
                            <FieldLabel htmlFor={id} className="ml-2">
                              {item}
                            </FieldLabel>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarSeparator className="mx-0" />
        </React.Fragment>
      ))}
    </>
  )
}

export default Classifications
