"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle  } from "@fortawesome/free-brands-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { signIn , signOut } from "next-auth/react";

export default function Home({ session }: { session: any }) {
  return (
    <main className="bg-black min-h-screen">
      <header className="bg-black h-[58px] border-b-1 border-[#1d1d1d] text-[14px] py-4 px-6 flex justify-between items-center font-orbitron">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold flex items-center">
            <span className="bg-white text-black px-2 py-1 rounded">Dark</span>
          </h1>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition">Websites</a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition">Templates</a>
          </nav>
        </div>

        {!session ? (
          <button
            className="bg-[#121212] text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-200 hover:text-black transition flex items-center space-x-2"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "12px", width: "12px", height: "12px" }} />
            <span>Login With Google</span>
          </button>
        ) : (
            <button
            className="bg-[#121212] text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-200 hover:text-black transition flex items-center space-x-2"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: "12px", width: "12px", height: "12px" }} />
            <span>Sign Out</span>
          </button>
        )
        }

      </header>
    </main>
  );
}
