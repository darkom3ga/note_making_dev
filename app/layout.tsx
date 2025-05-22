
import type { Metadata } from "next";
import { Geist, Geist_Mono , Work_Sans} from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/app/components/_SessionWrapper"; 

import Navbar from "@/app/components/Navbar";
import {getServerSession} from 'next-auth'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistWork_Sans = Work_Sans({ 
  variable: "--font-work-sans",
  weight : "400" ,
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notemaking",
  description: "Created By Om3ga",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession() ;
  return (
      <html lang="en ">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${geistWork_Sans.variable} antialiased`}
        >
          <SessionWrapper>
            <Navbar session={session} />
            {children}
          </SessionWrapper>
        </body>
      </html>
  );
}
