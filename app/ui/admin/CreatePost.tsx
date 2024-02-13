import { addPost } from "@/app/lib/actions";
import React from "react";

export default function CreatePost() {
  return (
    <form className=" mx-auto max-w-xl" action={addPost}>
      <h1 className="text-2xl font-bold mb-5">Add New Post</h1>
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="input input-bordered w-full mb-5"
      />
      <input
        name="slug"
        type="text"
        placeholder="Slug"
        className="input input-bordered w-full mb-5"
      />
      <input
        name="img"
        type="url"
        placeholder="Img"
        className="input input-bordered w-full mb-5"
      />
      <input
        name="userId"
        type="number"
        placeholder="UserId"
        className="input input-bordered w-full mb-5"
      />
      <textarea
        name="desc"
        className="textarea textarea-bordered w-full resize-none mb-5 min-h-40"
        placeholder="Description"
      />
      <AddPostBtn />
    </form>
  );
}

const AddPostBtn = () => {
  return <button className="btn btn-primary w-full text-white">Add</button>;
};
