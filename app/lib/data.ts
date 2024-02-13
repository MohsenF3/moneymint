import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { Post as SinglePost, User as SingleUser } from "./defenition";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  noStore();
  try {
    connectToDb();
    const posts = await Post.find<SinglePost>();
    return posts;
  } catch (error) {
    throw new Error(" Error getting posts");
  }
};

export const getPost = async (slug: string) => {
  noStore();
  try {
    connectToDb();
    const post = await Post.findOne<SinglePost>({ slug });
    return post;
  } catch (error) {
    throw new Error(" Error getting post");
  }
};

export const getUsers = async () => {
  noStore();
  try {
    connectToDb();
    const users = await User.find<SingleUser>();
    return users;
  } catch (error) {
    throw new Error(" Error getting users");
  }
};

export const getUser = async (id: string) => {
  try {
    connectToDb();
    const user = await User.findById<SingleUser>(id);
    return user;
  } catch (error) {
    throw new Error(" Error getting user");
  }
};
