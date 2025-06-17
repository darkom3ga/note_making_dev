"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

type Heading = { id: string; text: string; level: number };

export default function TOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = document.getElementById("content");
    if (!container) return;
    const headingElements = Array.from(container.querySelectorAll(" h2, h3, h4 ,h5 ,h6 ")) as HTMLElement[];

    const headingData: Heading[] = headingElements.map((el) => {
      const level = parseInt(el.tagName[1], 10);
      const id = el.id || el.innerText.toLowerCase().replace(/\s+/g, "-");
      el.id = id; 
      return { id, text: el.innerText, level };
    });

    setHeadings(headingData);

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (visible) {
        setActiveId(visible.target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20px 0px 0px 0px",
      threshold: 0.1,
    });

    headingElements.forEach((el) => {
      if (observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      headingElements.forEach((el) => {
        if (observerRef.current) observerRef.current.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-2.5 text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
      <h1> On This Page</h1>
      {headings.map(({ id, text, level }) => (
        <Link
          key={id}
          href={`#${id}`}
          className={clsx(
            {
              "pl-0": level === 1,
              "pl-4": level === 2,
              "pl-8": level === 3,
              "pl-12": level === 4,
              "font-medium text-primary text-[#56b6ff]": activeId == id,
            }
          )}
        >
          {text}
        </Link>
      ))}
    </div>
  );
}
