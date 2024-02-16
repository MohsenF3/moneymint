import { getPost } from "@/app/lib/data";
import { Post } from "@/app/lib/defenition";
import PostUser from "@/app/ui/blog/PostUser";
import { PostUserSkeleton } from "@/app/ui/skeletons";
import Image from "next/image";
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

  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-10 h-full py-5">
      {post?.img && (
        <div className="relative h-[40%] lg:h-full">
          <Image
            src={post.img}
            alt="Shoes"
            fill
            className="object-cover rounded"
          />
        </div>
      )}

      <div className="lg:col-span-2">
        <h2 className="text-3xl capitalize mb-5">{post?.title}</h2>
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
