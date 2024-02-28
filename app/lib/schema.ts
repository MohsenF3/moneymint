import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    username: z.string().min(1, { message: "username is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmpassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    path: ["confirmpassword"],
    message: "Password don't match",
  });

export const LoginFormSchema = z.object({
  username: z.string().min(1, { message: "username is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
