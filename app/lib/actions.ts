"use server";

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {
  const { title, slug, img, userId, desc } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      slug,
      img,
      userId,
      desc,
      createdAt: new Date(),
    });

    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    console.log("failed to add post");
  }
};

export const deletePost = async (id: string) => {
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
  } catch (error) {
    console.log("failed to delete post");
  }
};

export const addUser = async (formData: FormData) => {
  const { username, email, img, password, isAdmin } =
    Object.fromEntries(formData);

  const turnIsAdminToTrueOrFalse = isAdmin ? "true" : "false";

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      img,
      password,
      isAdmin: turnIsAdminToTrueOrFalse,
    });

    await newUser.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log("failed to add post");
  }
};

export const deleteUser = async (id: string) => {
  try {
    connectToDb();
    await User.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log("failed to delete post");
  }
};
