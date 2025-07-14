import { z } from "zod";

export const RegisterUsersSchema = z.object({
  firstName: z.string().trim().min(1, { message: "first name is required" }),
  lastName: z.string().trim().min(1, { message: "last name is required" }),
  userName: z.string().trim().min(1, { message: "user name is required" }),
  phoneNumber: z
    .string()
    .trim()
    .min(1, { message: "phone number is required" }),
  email: z.string().trim().email({ message: "invalid email format" }),
  password: z
    .string()
    .trim()
    .min(6, { message: "password must be at least 6 characters long" }),
});

// export const LoginUsersSchema = z.object({
//   email: z.string().trim().email({ message: "email is required" }),
//   password: z
//     .string()
//     .trim()
//     .min(6, {
//       message: "password must be strong and be atleast 6 characters long",
//     }),
// });

export const LoginUsersSchema = z.object({
  email: z
    .string()
    .includes("@", { message: "email must contain an '@' symbol" })
    .trim()
    .email(),
  password: z
    .string()
    .trim()
    .min(6, { message: "password must be at least 6 characters long" }),
});
