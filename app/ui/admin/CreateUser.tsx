import { addUser } from "@/app/lib/actions";
import React from "react";

export default function CreateUser() {
  return (
    <form className=" mx-auto max-w-xl" action={addUser}>
      <h1 className="text-2xl font-bold mb-5">Add New User</h1>
      <input
        name="username"
        type="text"
        placeholder="Username"
        className="input input-bordered w-full mb-5"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input-bordered w-full mb-5"
      />
      <input
        name="img"
        type="url"
        placeholder="Img"
        className="input input-bordered w-full mb-5"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="input input-bordered w-full mb-5"
      />

      <div className="mb-5 flex items-center justify-between input input-bordered">
        <label htmlFor="isAdmin">IsAdmin</label>
        <input
          name="isAdmin"
          id="isAdmin"
          type="checkbox"
          className="checkbox"
        />
      </div>

      <button type="submit" className="btn btn-primary w-full text-white">
        Add
      </button>
    </form>
  );
}

const AddPostBtn = () => {
  return (
    <button type="submit" className="btn btn-primary w-full text-white">
      Add
    </button>
  );
};
