"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import FeaturedPost from "@/app/components/ui/featuredpost";
import PostCard from "@/app/components/ui/postcard";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [total, setTotal] = useState(0);
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const totalPages = Math.ceil(total / 10);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`/api/blogs?page=${page}`);
      const { blogs, total } = await res.json();
      setBlogs(blogs);
      setTotal(total);
    };
    fetchBlogs();
  }, [page]);

  
  return (
    <div className={`flex items-start gap-14 font-orbitron`}>
      <div className="flex-[4]">
        <div className="flex items-start gap-14">
          <div className="flex-[3] pt-10">

            {/* featured / postcard */}
            <div className="grid grid-cols-4 grid-rows-2 gap-4 p-6 min-h-screen font-sans">
              <FeaturedPost
                title="INSIDE THE EMBRYOROOM:"
                subtitle="A CONVERSATION WITH EDWARD QUIST"
                image="/test1.png"
                tags={["AMBIENT", "MODERN CLASSICAL"]}
              />
              <PostCard
                title="BITCHIN BAJAS – dddddddddddddddddBAJASCILLATORS"
                category="DRAG CITY"
                image="/test2.jpg"
                tags={["AMBIENT", "MODERN CLASSICAL"]}
              />
              <PostCard
                title="CAVE – ALLWAYS"
                category="DRAG CITY"
                image="/test3.jpg"
                tags={["INDIE", "PUNK", "ALTERNATIVE"]}
              />
              <PostCard
                title="CAVE – PSYCHIC PSUMMER"
                category="DRAG CITY"
                image="psychic.jpg"
              />
              <PostCard
                title="YOUR KISSES ARE LIKE ROSES: FADO RECORDINGS, 1914-1936"
                category="DEATH IS NOT THE END"
                image="fado.jpg"
              />
            </div>

            {/* Divider with Runic Notes Written */}
            <div className="bg-[#ffffff08] h-[70px] flex border-gray-200 my-6 items-center justify-center overflow-clip">
              <h1 className="text-[166px] font-extrabold text-[#0E0E11] font-black text-[#fff] text-center ">runic notes</h1>
            </div>

            {/* latest blogs */}
            <h1 className="text-2xl font-bold mb-4">Latest Blogs</h1>
            <ul className="space-y-4">
                {blogs.map((blog) => (
                <li key={blog._id} className="border-b pb-2">
                    <Link href={`/blog/${blog.slug}`} className="text-lg font-semibold hover:underline">
                    {blog.title}
                    </Link>
                    <p className="text-sm text-muted-foreground">{new Date(blog.date).toDateString()}</p>
                    <p className="text-sm text-muted-foreground">{blog.description}</p>
                </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            <div className="flex justify-between mt-6">
                <Link
                href={`?page=${page - 1}`}
                className={`btn ${page <= 1 ? "pointer-events-none opacity-50" : ""}`}
                >
                ← Prev
                </Link>
                <span className="text-muted-foreground">Page {page} of {totalPages}</span>
                <Link
                href={`?page=${page + 1}`}
                className={`btn ${page >= totalPages ? "pointer-events-none opacity-50" : ""}`}
                >
                Next →
                </Link>
            </div>
          </div>
            
        </div>
      </div>
    </div>

  );
}
