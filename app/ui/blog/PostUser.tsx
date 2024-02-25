import { getUser } from "@/app/lib/data";
import { User } from "@/app/lib/definition";
import Image from "next/image";
import img from "../../../public/default-user.svg";

export default async function PostUser({
  userId,
  published,
}: {
  userId: string;
  published: string;
}) {
  const user: User = await getUser(userId);

  return (
    <>
      {user && (
        <div className="flex items-center gap-5">
          <div className="relative w-16 h-16">
            <Image
              src={user.img ? user.img : img}
              alt="logo"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start">
            <p className="text-gray-500 text-sm">Author</p>
            <p className="">{user.username}</p>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-gray-500 text-sm">Published</p>
            <p className="">{published}</p>
          </div>
        </div>
      )}
    </>
  );
}
