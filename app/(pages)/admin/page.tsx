import AllPosts from "@/app/ui/admin/AllPosts";
import AllUsers from "@/app/ui/admin/AllUsers";
import CreatePost from "@/app/ui/admin/CreatePost";
import CreateUser from "@/app/ui/admin/CreateUser";
import { AllPostsAndUsersSkeleton } from "@/app/ui/skeletons";
import { auth } from "@/auth";
import React, { Suspense } from "react";

export default async function Admin() {
  const session = await auth();
  const userId = session?.user.id;

  return (
    <div className="flex flex-col gap-10 pt-10">
      {/* post */}
      <div className="flex md:flex-row flex-col-reverse gap-10 border-b pb-16">
        {/* fetch posts */}
        <div className="flex-1">
          <Suspense fallback={<AllPostsAndUsersSkeleton />}>
            <AllPosts />
          </Suspense>
        </div>
        {/* create post form */}
        <div className="flex-1">
          <CreatePost userId={userId} />
        </div>
      </div>
      {/* user */}
      <div className="flex md:flex-row flex-col-reverse gap-10 py-12">
        {/* fetch users */}
        <div className="flex-1">
          <Suspense fallback={<AllPostsAndUsersSkeleton />}>
            <AllUsers />
          </Suspense>
        </div>
        {/* create post user */}
        <div className="flex-1">
          <CreateUser />
        </div>
      </div>
    </div>
  );
}
