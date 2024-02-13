import { Post } from "@/app/lib/models";
import { connectToDb } from "@/app/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) => {
  const { slug } = params;

  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};

export const DELETE = async (
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) => {
  const { slug } = params;

  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json("post Deleted");
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
