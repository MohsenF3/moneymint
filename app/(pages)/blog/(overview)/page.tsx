import { getPosts } from "@/app/lib/data";
import { Post } from "@/app/lib/defenition";
import { BlogCard } from "@/app/ui/blog/BlogCard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: " Blog ",
  description: " A collection of blog posts about various topics.",
};

export default async function Blog() {
  const posts: Post[] = await getPosts();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-10">
      {posts && posts.map((post) => <BlogCard key={post._id} post={post} />)}
    </div>
  );
}
