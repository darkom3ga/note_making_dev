"use client";

import { FontAwesomeIcon , } from "@fortawesome/react-fontawesome";
import { faGoogle  } from "@fortawesome/free-brands-svg-icons";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'

import { signIn , signOut } from "next-auth/react";
import Link from "next/link";
import { HexagonIcon ,LogIn , LogOut  } from "lucide-react";
import type { ReactNode } from "react";
import NavHelper from "./NavbarHelper";
import { MoveUpRightIcon } from "lucide-react"; 
import Image from 'next/image'
import logo from '@/app/public/logo.png';
import EditableToggleIcon from './editablelogic/EditableToggleIcon'
interface NavbarProps {
  session: any;
}
type NavLink =
  | {
      title: string;
      href: string;
      external?: boolean;
    }
  | { component: ReactNode; href: null };


export function Logo() {
  return (
     <Link href="/" >
      <div className="flex gap-3 items-center">
        <span className="text-[36px] font-black">runic</span>
        <span className="text-[36px] font-black text-[#56b6ff]">notes</span>
      </div> 
    </Link>
  );
}
export function LogoMain() {
  return (
     <Link href="/" className="ml-15 flex items-center justify-center" >
      <div className="flex items-center">
        <Image
          src={logo}
          width={38}
          height={38}
          alt="Picture of the author"
        />
        <h1 className=" text-[34px] font-logo">Runic</h1>
        <h2 className="text-[34px] font-logo">Notes</h2>
      </div> 
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
              activeClassName="text-primary font-dmsans"
              className="flex items-center gap-1"
              href={item.href}
            >
              {item.title}{" "}
              {item.external && (
                <MoveUpRightIcon
                  className="w-3 h-3 font-dmsans align-super"
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
export function NavMenu2_1() {
  return (
    <>
      {NAVLINKS.slice(0, 2).map((item) => {
        const componentData =
          item.href == null ? (
            item.component
          ) : (
            <NavHelper
              key={item.title + item.href}
              activeClassName="text-primary font-dmsans"
              className="flex items-center gap-1"
              href={item.href}
            >
              {item.title}{" "}
              {item.external && (
                <MoveUpRightIcon
                  className="w-3 h-3 font-dmsans align-super"
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

export function NavMenu2_2() {
  return (
    <>
      {NAVLINKS.slice(2, 4).map((item) => {
        const componentData =
          item.href == null ? (
            item.component
          ) : (
            <NavHelper
              key={item.title + item.href}
              activeClassName="text-primary font-dmsans"
              className="flex items-center gap-1"
              href={item.href}
            >
              {item.title}{" "}
              {item.external && (
                <MoveUpRightIcon
                  className="w-3 h-3 font-dmsans align-super"
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

export default function Navbar({ session}: NavbarProps)  {
     const pathname = usePathname()

    return (
      <nav className="w-full bg-inherit h-navbarheight sticky top-0 z-50 border-[#1d1d1d] lg:px-4 px-2 border-b font-orbitron">
          <div className="relative sm:p-3 max-w-[1530px] mx-auto h-full flex justify-between md:gap-2">
            {/* Left section */}
            <div className="flex flex-1 gap-10 justify-end text-gray-400">
              <NavMenu2_1 />
            </div>

            {/* Center */}
            <div className="flex flex-none items-center justify-center ml-10 mr-10">
              <Logo />
            </div>

            {/* Right spacer */}
            <div className="flex flex-1 gap-10 justify-start text-gray-400">
              <NavMenu2_2 />
            </div>
            <div className="flex items-center gap-4">
              <EditableToggleIcon path= {pathname} />
            </div>
          </div>

      </nav>
  );
}

