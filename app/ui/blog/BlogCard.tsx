"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { Post } from "@/app/lib/defenition";
import Link from "next/link";

export function BlogCard({ post }: { post: Post }) {
  return (
    <CardContainer className="inter-var relative w-full h-full">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-accent bg-base-100 border-primary/[0.2] w-full h-[31rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white light-white"
        >
          {post.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {post.desc && post.desc.slice(0, 100)}...
        </CardItem>
        {post.img && (
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={post.img}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        )}
        <Link
          href={`/blog/${post.slug}`}
          className="absolute bottom-0 m-5 right-0 px-4 py-2 rounded-xl bg-success text-white text-xs font-bold"
        >
          Read More
        </Link>
      </CardBody>
      <p className="absolute top-[-2rem]  max-lg:left-0 lg:top-10 lg:right-[-4.5rem] font-semibold lg:-rotate-90">
        {post.createdAt
          .toString()
          .slice(4, 15)
          .split(" ")
          .map((word, index) => (index === 2 ? ` ${word}` : ` ${word} /`))
          .join("")}
      </p>
    </CardContainer>
  );
}
