import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="absolute inset-0 bg-white z-30 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-black font-bold">Oops ! Page not found;</h1>
      <Image src="/404.svg" alt="404 image" width={800} height={720} />
      <Link href="/" className="btn btn-primary mt-4">
        Back Home
      </Link>
    </div>
  );
}
