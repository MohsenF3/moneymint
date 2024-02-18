import { getPosts, getUser } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
import { deletePost } from "@/app/lib/actions";
import { Post, User } from "@/app/lib/defenition";
import Link from "next/link";

export default async function AllPosts() {
  const posts: Post[] = await getPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Posts</h1>
      <div>
        {posts.map(async (post) => {
          const userInfo: User | null = post.userId
            ? await getUser(post.userId)
            : null;

          return (
            <div className="flex items-center justify-between">
              <Link
                href={`/blog/${post.slug}`}
                key={post._id}
                className="flex items-center justify-between mb-5"
              >
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
                  <div>
                    <span className="md:text-lg font-medium">{post.title}</span>
                    <p className="text-sm">
                      Published By
                      <span className="text-green-500 font-medium ml-1">
                        {userInfo?.username}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
              <DeletePost id={post._id} />
            </div>
          );
        })}
      </div>
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
