"use client";
import TOC from "./widgets/toc";
import { useEffect, useState } from "react";

export function LeftSidebar() {
    const headings = [
    { id: "introduction", text: "Introduction" },
    { id: "usage", text: "Usage" },
    { id: "examples", text: "Examples" },
  ];

  return (
    <div className="w-sidebar_l_width h-full p-4">
      <aside className="w-sidebar_l_width h-full" >
      <TOC />
      </aside>
    </div>
  );
}

export function RightSidebar() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("main h1 , main h2, main h3 , h1 ,h2, h3"));
    console.log(headingElements);
    const extracted = headingElements.map((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, "-") || "heading";
      if (!heading.id) heading.id = id;
      return { id, text: heading.textContent || "" };
    });
    setHeadings(extracted);
  }, []);

  return (

        


  );
}
