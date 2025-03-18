
import type { Metadata } from "next";
import { Geist, Geist_Mono , Work_Sans} from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper"; 

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${geistWork_Sans.variable} antialiased`}
        >
          <SessionWrapper>{children}</SessionWrapper>
        </body>
      </html>
  );
}
