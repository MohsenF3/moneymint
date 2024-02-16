"use server";

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

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
    revalidatePath("/admin");
  } catch (error) {
    console.log("failed to add post", error);
  }
};

export const deletePost = async (id: string) => {
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log("failed to delete post");
  }
};

export const addUser = async (formData: FormData) => {
  const { username, email, img, password, isAdmin } =
    Object.fromEntries(formData);

  const turnIsAdminToTrueOrFalse = isAdmin ? "true" : "false";

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password.toString(), salt);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      img,
      password: hashedPassword,
      isAdmin: turnIsAdminToTrueOrFalse,
    });

    await newUser.save();
    revalidatePath("/admin");
  } catch (error) {
    console.log("failed to add User", error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
  } catch (error) {
    console.log("failed to delete post");
  }
};

// export const handleGithubLogin = async () => {
//   await signIn("github");
// };

// export const handleLogout = async () => {
//   await signOut();
// };

// export const register = async (
//   prevState: RegisterFormState,
//   formData: FormData
// ) => {
//   const validatedFields = LoginFormSchema.safeParse(
//     Object.fromEntries(formData)
//   );

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Missing Fields. Failed to Register.",
//     };
//   }

//   const { username, email, password, confirmpassword } = validatedFields.data;

//   if (password !== confirmpassword) {
//     return {
//       message: "Oops! password doesnt match",
//     };
//   }

//   try {
//     connectToDb();

//     const user = await User.findOne({ username });

//     if (user) {
//       return {
//         message: "Username already exists",
//       };
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password.toString(), salt);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     await signIn("credentials", { username, password });
//   } catch (error) {
//     return {
//       message: "Database Error: Failed to Register",
//     };
//   }
//   redirect("/blog");
// };

// export const login = async (
//   prevState: string | undefined,
//   formData: FormData
// ) => {
//   const { username, password } = Object.fromEntries(formData);
//   try {
//     await signIn("credentials", { username, password });
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return "Invalid credentials";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
// };
