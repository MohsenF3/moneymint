import React from "react";
import { BlogCard } from "./BlogCard";
import { fetchFilteredPosts } from "@/app/lib/data";
import { Post } from "@/app/lib/definition";

export default async function Posts({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const posts: Post[] = await fetchFilteredPosts(query, currentPage);

  return (
    <>
      {posts.length === 0 ? (
        <p className="mt-5">No posts found for the given query</p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-10">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
