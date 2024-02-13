import { Post } from "@/app/lib/defenition";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: " Blog ",
  description: " A collection of blog posts about various topics.",
};

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export default async function Blog() {
  const posts: Post[] = await getPosts();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-10">
      {posts &&
        posts.map((post) => (
          <div
            className="card relative w-full bg-base-100 shadow-xl"
            key={post._id}
          >
            {post.img && (
              <div className="relative h-52 ">
                <Image
                  src={post.img}
                  alt="Post Image"
                  fill
                  className="object-cover rounded"
                />
              </div>
            )}

            <div className="card-body px-1 capitalize">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.desc && post.desc.slice(0, 50)}...</p>
              <div className="card-actions justify-end">
                <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
            <p className="absolute top-[-2rem]  max-lg:left-0 lg:top-10 lg:right-[-5rem] font-semibold lg:-rotate-90">
              {post.createdAt
                .toString()
                .slice(4, 15)
                .split(" ")
                .map((word, index) => (index === 2 ? ` ${word}` : ` ${word} /`))
                .join("")}
            </p>
          </div>
        ))}
    </div>
  );
}
