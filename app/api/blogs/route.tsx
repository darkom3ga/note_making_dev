//Logic to Search for Blogs from DB 10 at a time with Pagination

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Blog from "@/dbmodels/blog";

export async function GET(req: Request) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 10;
  const skip = (page - 1) * limit;

  const blogs = await Blog.find({})
    .sort({ date: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Blog.countDocuments();
  // console.log(" blogs:", blogs);

  return NextResponse.json({ blogs, total });
}
