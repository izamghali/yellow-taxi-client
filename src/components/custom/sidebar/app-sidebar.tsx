import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { PiFunnel, PiFunnelBold } from "react-icons/pi";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import FormSidebar from "./form-sidebar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {



    return (
        <Sidebar collapsible="none">
            <SidebarContent className="p-2">
            <SidebarGroup>
                <h1 className="font-bold text-xl mb-12">Yellow Taxi Analytics Dashboard</h1>
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-black">Trips</h2>
                    <Popover>
                        <PopoverTrigger className="flex justify-end items-center w-fit bg-black p-2 rounded-md gap-2">
                            <PiFunnel className="text-white" size={`18px`} />
                            <span className="text-white">Filters</span>
                        </PopoverTrigger>
                        <PopoverContent><FormSidebar /></PopoverContent>
                    </Popover>
                </div>
                <div>
                    {/* trips */}
                </div>
                <div>
                    <span className="text-sm text-muted-foreground">Showing 1-10 of 1000</span>
                </div>

                {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
                {/* <SidebarGroupContent>
                    <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                            </a>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent> */}

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
