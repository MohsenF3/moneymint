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

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredPosts(query: string, currentPage: number) {
  const page = Math.max(currentPage - 1, 0); // Ensure page is a non-negative number

  const regexQuery = new RegExp(query, "i"); // For case-insensitive regex search

  try {
    connectToDb();

    // Find posts with the search query that also paginate results
    const posts = await Post.find({
      $or: [{ title: regexQuery }, { desc: regexQuery }],
    })
      .sort({ createdAt: -1 }) // Sorts by the date created
      .skip(page * ITEMS_PER_PAGE) // Skip to the correct pagination
      .limit(ITEMS_PER_PAGE); // Limit results

    return posts;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch posts.");
  }
}

export async function fetchPostsPages(query: string) {
  try {
    connectToDb();
    // Constructing the query conditions
    const regexQuery = { $regex: new RegExp(query, "i") };
    const condition = {
      $or: [
        { title: regexQuery },
        { desc: regexQuery },
        { userId: regexQuery },
        { slug: regexQuery },
      ],
    };

    // Counting the total number of posts based on the query conditions
    const count = await Post.countDocuments(condition);

    // Calculating the total number of pages
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of posts.");
  }
}

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
