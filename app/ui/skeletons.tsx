export function Skeleton() {
  return (
    <div className="flex flex-col gap-10">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export function BlogSkeleton() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-8">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-10 h-full py-5">
      <div className="skeleton w-full h-[30%] lg:h-full"></div>
      <div className="lg:col-span-2 ">
        <div className="skeleton h-5 w-[30%] mb-5"></div>
        <PostUserSkeleton />
        <div className="skeleton h-5 w-full lg:w-[80%] mb-5"></div>
        <div className="skeleton h-5 w-full lg:w-[80%] mb-5"></div>
        <div className="skeleton h-5 w-full lg:w-[80%] mb-5"></div>
        <div className="skeleton h-5 w-full lg:w-[80%] mb-5"></div>
        <div className="skeleton h-5 w-full lg:w-[80%] mb-5"></div>
      </div>
    </div>
  );
}

export function PostUserSkeleton() {
  return (
    <div className="flex items-center gap-5 mb-5">
      <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
      <div className="flex flex-col items-center gap-2">
        <div className="skeleton h-5 w-10"></div>
        <div className="skeleton h-5 w-16"></div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="skeleton h-5 w-10"></div>
        <div className="skeleton h-5 w-16"></div>
      </div>
    </div>
  );
}

export function SkeletonForAllPostsAndUsers() {
  return (
    <div className="flex items-center justify-between gap-4 w-full mb-3">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
        <div className="skeleton w-36 h-5 "></div>
      </div>
      <div className="skeleton h-10 w-[10%]"></div>
    </div>
  );
}

export function AllPostsAndUsersSkeleton() {
  return (
    <>
      <SkeletonForAllPostsAndUsers />
      <SkeletonForAllPostsAndUsers />
      <SkeletonForAllPostsAndUsers />
      <SkeletonForAllPostsAndUsers />
      <SkeletonForAllPostsAndUsers />
    </>
  );
}
