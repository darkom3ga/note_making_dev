import {getServerSession} from 'next-auth';
import TOC from '@/app/components/widgets/toc';
import Navbar from "@/app/components/Navbar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions) ;
  
  return (
    <div>
      <Navbar session={session}  />
      <main className="sm:container mx-auto w-[88vw] h-auto">    
        <div className={`flex items-start gap-14 font-orbitron`}>
          {/* Below is the leftSidebar */}
          <aside className="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[92.75vh] overflow-y-auto">
            {/* <RightSidebar /> */}
          </aside>
          {/* Below is the Main Content */}
          <div className="flex-[4]">
            <div className="flex items-start gap-14">
              <div className="flex-[3] pt-10">
                {children}
              </div>
              {/* Below is the Right Sidebar */}
              <div className="lg:flex flex-[1] min-w-[230px] py-8 sticky top-16 h-[95.95vh]">
                <div className="flex flex-col gap-3 w-full">
                  <TOC/>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
