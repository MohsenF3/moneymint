import { getPosts } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
import { deletePost } from "@/app/lib/actions";

export default async function AllPosts() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-5 ">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <Image
                    src={post.img ? post.img : "/default-user.svg"}
                    alt="Shoes"
                    width={70}
                    height={70}
                    className="rounded-full"
                    style={{ verticalAlign: "middle" }}
                  />
                </div>
              </div>
              <span className="text-lg font-medium">{post.title}</span>
            </div>
            <DeletePost id={post._id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DeletePost({ id }: { id: string }) {
  const deletePostWithId = deletePost.bind(null, id);

  return (
    <>
      <form action={deletePostWithId}>
        <button className="btn glass bg-red-500 text-white hover:bg-red-600 ">
          Delete
        </button>
      </form>
    </>
  );
}
