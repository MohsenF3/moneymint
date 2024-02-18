import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  noStore();
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    throw new Error(" Error getting posts");
  }
};

export const getPost = async (slug: string) => {
  noStore();
  try {
    connectToDb();

    const newSlug = slug.replace(/%20/g, (match) => {
      if (match.includes("%20")) {
        return match.replace(/%20/, " ");
      } else {
        return match;
      }
    });

    const post = await Post.findOne({ slug: newSlug });
    return post;
  } catch (error) {
    throw new Error(" Error getting post");
  }
};

export const getUsers = async () => {
  noStore();
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(" Error getting users");
  }
};

export const getUser = async (id: string) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw new Error(" Error getting user");
  }
};
