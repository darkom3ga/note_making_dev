import { LeftSidebar , RightSidebar} from "@/app/components/Sidebar";
// Remove RightSidebar since you're not using it (optional)
import { Work_Sans } from "next/font/google";

const geistWork_Sans = Work_Sans({
  variable: "--font-work-sans",
  weight: "400",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex items-start gap-14 font-orbitron`}>
      {/* <aside className="w-sidebar_l_width p-navbarheight sticky top-0 h-screen overflow-y-auto">
        <LeftSidebar />
      </aside> */}
      <main className="flex-1 p-navbarheight min-h-screen pt-6 px-10 overflow-y-auto">
        {children}
      </main>
      {/* <aside className="w-sidebar_r_width p-navbarheight sticky top-0 h-screen overflow-y-auto">
        <RightSidebar />
      </aside> */}
    </div>
  );
}
