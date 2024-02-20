import { deleteUser } from "@/app/lib/actions";
import { getUsers } from "@/app/lib/data";
import { User } from "@/app/lib/defenition";
import Image from "next/image";
import React from "react";

export default async function AllUsers() {
  const users: User[] = await getUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Users</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between mb-5 gap-2"
          >
            <div className="flex items-center gap-5 ">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <Image
                    src={user.img ? user.img : "/default-user.svg"}
                    alt="Shoes"
                    width={70}
                    height={70}
                    className="rounded-full"
                  />
                </div>
              </div>
              <span className="text-lg font-medium flex flex-col">
                {user.username}
                {user.isAdmin ? (
                  <span className="text-green-500 font-medium text-sm">
                    Admin
                  </span>
                ) : null}
              </span>
            </div>
            <DeleteUser id={user.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DeleteUser({ id }: { id: string }) {
  const deleteUserWithId = deleteUser.bind(null, id);

  return (
    <>
      <form action={deleteUserWithId}>
        <button className="btn btn-error ">Delete</button>
      </form>
    </>
  );
}
