import MapBoxMap from "@/components/custom/map";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/sidebar/app-sidebar";

export default function App() {
    
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                {/* <SidebarTrigger /> */}
                <div className="border border-black h-full">
                    {/* <MapBoxMap /> */}
                </div>
            </main>
        </SidebarProvider>
    );
}
