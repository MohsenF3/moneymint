import { getUser } from "@/app/lib/data";
import { User } from "@/app/lib/defenition";
import Image from "next/image";

// const getUser = async (userId: string) => {
//   const response = await fetch("http://localhost:3000/api/", {
//     next: { revalidate: 60 },
//   });

//   if (!response.ok) {
//     throw new Error("failed to fetch user");
//   }

//   return response.json();
// };

export default async function PostUser({ userId }: { userId: string }) {
  const user = await getUser(userId);

  return (
    <>
      {user && (
        <div className="relative w-16 h-16">
          <Image
            src={user.img ? user.img : "/default-user.svg"}
            alt="logo"
            fill
            className="rounded-full object-cover"
          />
        </div>
      )}
    </>
  );
}
