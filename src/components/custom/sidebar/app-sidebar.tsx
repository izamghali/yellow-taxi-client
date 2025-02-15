import { PiFunnel } from "react-icons/pi";
import FormSidebar from "./form-sidebar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface AppSidebarProps {
    children: React.ReactNode;
}

export function AppSidebar({ children }: AppSidebarProps) {

    return (
        <div className="flex border border-blue-400 h-screen">
            <div className="min-w-[320px] p-4 border border-black">
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
            </div>
            <div className="border border-red-400 w-full">
                { children }
            </div>
        </div>
    )
}
