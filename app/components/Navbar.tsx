"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle  } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { signIn , signOut } from "next-auth/react";
import Link from "next/link";
import { HexagonIcon ,LogIn , LogOut  } from "lucide-react";
import type { ReactNode } from "react";
import NavHelper from "./NavbarHelper";
import { MoveUpRightIcon } from "lucide-react"; 
import Search from "@/app/components/ui/search";

type NavLink =
  | {
      title: string;
      href: string;
      external?: boolean;
    }
  | { component: ReactNode; href: null };


export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <HexagonIcon className="w-7 h-7 text-muted-foreground fill-current" />
      <h2 className="text-md font-bold">Dark</h2>
    </Link>
  );
}
export const NAVLINKS: NavLink[] = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Examples",
    href: "#",
  },
  {
    title: "Guides",
    href: "#",
  },
  {
    title: "Community",
    href: "#",
    external: true,
  },
];

export function NavMenu() {
  return (
    <>
      {NAVLINKS.map((item) => {
        const componentData =
          item.href == null ? (
            item.component
          ) : (
            <NavHelper
              key={item.title + item.href}
              activeClassName="text-primary font-semibold"
              className="flex items-center gap-1"
              href={item.href}
            >
              {item.title}{" "}
              {item.external && (
                <MoveUpRightIcon
                  className="w-3 h-3 align-super"
                  strokeWidth={3}
                />
              )}
            </NavHelper>
          );
        return componentData;
      })}
    </>
  );
}

export default function Navbar({ session }: { session: any }) {
  return (
      <nav className="w-full border-b h-navbarheight sticky top-0 z-50 border-[#1d1d1d] lg:px-4 px-2 font-orbitron">
        <div className="sm:p-3 p-1 max-w-[1530px] mx-auto h-full flex items-center justify-between md:gap-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-4">
              <div className="sm:flex hidden gap-3">
                <Logo />
              </div>
              <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
                <NavMenu />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Search placeholder="Search invoices..." />
              <div className="flex ml-2.5 sm:ml-0">
                {!session ? (
                  <Link
                    href="#"
                    className="h-8 w-8 hover:bg-accent gap-[5px] hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("google");
                    }}
                  >
                    {/* <LogIn/> */}
                    <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "16px", width: "16px", height: "16px" }} />
                    {/* <span>LogIn</span> */}

                  </Link>

                  // <Link
                  //   // className="bg-[#121212] text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-200 hover:text-black transition flex items-center space-x-2"
                  //   className={buttonVariants({ variant: "ghost", size: "icon" })}
                  //   onClick={() => signIn("google")}
                  // >
                  //   <LogIn/>
                  //   {/* <span>Login With Google</span> */}
                  // </Link>
                ) : (
                    <button
                    // className="bg-[#121212] text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-200 hover:text-black transition flex items-center space-x-2"
                    onClick={() => signOut()}
                  >
                    {/* <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: "12px", width: "12px", height: "12px" }} /> */}
                    <LogOut/>
                    {/* <span>Sign Out</span> */}
                  </button>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    // </main>
  );
}


// "use client";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle  } from "@fortawesome/free-brands-svg-icons";
// import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import { signIn , signOut } from "next-auth/react";

// export default function Navbar({ session }: { session: any }) {
//   return (
//       <nav className="w-full border-b h-navbarheight sticky top-0 z-50 border-[#1d1d1d] lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
//       {/* <header className="bg-[#080a0b32] h-navbarheight fixed w-full border-b-1 border-[#1d1d1d] text-[14px] py-4 z-50 px-6 flex justify-between items-center font-orbitron"> */}
//         <div className="flex items-center space-x-4">
//           <h1 className="text-xl  font-bold flex items-center">
//             <span className="bg-white text-black px-2 py-1 rounded">Dark</span>
//           </h1>
//           <nav className="flex space-x-4">
//             <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition">Websites</a>
//             <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition">Templates</a>
//           </nav>
//         </div>

//         {!session ? (
//           <button
//             className="bg-[#121212] text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-200 hover:text-black transition flex items-center space-x-2"
//             onClick={() => signIn("google")}
//           >
//             <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "12px", width: "12px", height: "12px" }} />
//             <span>Login With Google</span>
//           </button>
//         ) : (
//             <button
//             className="bg-[#121212] text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-200 hover:text-black transition flex items-center space-x-2"
//             onClick={() => signOut()}
//           >
//             <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: "12px", width: "12px", height: "12px" }} />
//             <span>Sign Out</span>
//           </button>
//         )
//         }

//       </nav>
//     // </main>
//   );
// }
