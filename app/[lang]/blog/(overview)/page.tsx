import { fetchPostsPages } from "@/app/lib/data";
import Pagination from "@/app/ui/blog/Pagination";
import Posts from "@/app/ui/blog/Posts";
import Search from "@/app/ui/blog/Search";
import { BlogPostsSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: " Blog ",
  description: " A collection of blog posts about various topics.",
};

export default async function Blog({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchPostsPages(query);

  return (
    <div>
      <div className=" mt-4">
        <Search placeholder="Search..." />
      </div>
      <Suspense key={query + currentPage} fallback={<BlogPostsSkeleton />}>
        <Posts query={query} currentPage={currentPage} />
      </Suspense>
      <div className="my-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
