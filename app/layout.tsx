
import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono , Work_Sans ,Voltaire} from "next/font/google";
import SessionWrapper from "@/app/components/_SessionWrapper"; 
import LayoutClientWrapper from '@/app/components/editablelogic/LayoutClientWrapper';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistWork_Sans = Work_Sans({ 
  variable: "--font-work-sans",
  weight : "400" ,
  subsets: ["latin"],
});

const FontLogo = Voltaire({ 
  variable: "--font-logo",
  weight : "400" ,
  subsets: ["latin"],
}); 

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Runic Notes",
  description: "Blog and Notes all in one ?",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode;}>) {
  return (
      <html lang="en ">
        <body className={`${geistSans.variable} ${geistMono.variable} ${geistWork_Sans.variable} ${FontLogo.variable} antialiased`}>
          <SessionWrapper>
            <LayoutClientWrapper>
              {children}
            </LayoutClientWrapper>
          </SessionWrapper>
        </body>
      </html>
  );
}
