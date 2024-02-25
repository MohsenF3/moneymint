import { getPost } from "@/app/lib/data";
import { Post } from "@/app/lib/definition";
import PostUser from "@/app/ui/blog/PostUser";
import { PostUserSkeleton } from "@/app/ui/skeletons";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await getPost(params.slug);

  return {
    title: post?.title,
    description: post?.desc,
  };
};

export default async function SingleBlog({
  params,
}: {
  params: { slug: string };
}) {
  const post: Post = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 h-[80vh] ">
      <div className="relative h-full w-full max-lg:col-span-2 max-md:row-span-2">
        {post?.img && (
          <Image
            src={post.img}
            alt="BLog Image"
            fill
            className="object-cover rounded"
          />
        )}
      </div>
      <div className="col-span-2">
        <h2 className="md:text-3xl text-2xl capitalize mb-5">{post?.title}</h2>
        <div className="flex items-center gap-5 mb-10">
          {post && (
            <Suspense fallback={<PostUserSkeleton />}>
              <PostUser
                userId={post.userId}
                published={post?.createdAt.toString().slice(4, 15)}
              />
            </Suspense>
          )}
        </div>
        <p>{post?.desc}</p>
      </div>
    </div>
  );
}
