import { Post } from "@/app/lib/models";
import { connectToDb } from "@/app/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    console.log("posted fetched");

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
