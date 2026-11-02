import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Footer";

function Layout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-50">
        <AppSidebar />
        <main className="w-full">
          <div className="w-full min-h-[calc(100vh-35px)] py-28 px-10">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  );
}

export default Layout;
