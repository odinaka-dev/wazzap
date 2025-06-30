"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Login as LoginAPI } from "@/services/auth.service";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useStore } from "@/Zustand/store/useStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUsersSchema } from "@/lib/zod";
import * as z from "zod";
import { useMutation } from "@tanstack/react-query";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const { setIsLoggedIn, setUsers } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginUsersSchema>>({
    resolver: zodResolver(LoginUsersSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync: Login } = useMutation({
    mutationKey: ["login"],
    mutationFn: LoginAPI,
  });

  async function onSubmit(values: z.infer<typeof LoginUsersSchema>) {
    try {
      const response = await Login(values);

      console.log(response.data);

      if (response.success === true && response.data) {
        localStorage.setItem("token:", response.data.token);
        setUsers({
          email: values.email,
          password: values.password,
        });
        setTimeout(() => {
          router.push("/chats");
        }, 3000);
        toast.success("Login successful!");
      } else {
        toast.error("Login failed");
      }
    } catch (err) {
      toast.error("Something went wrong during login.");
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
      {...props}
    >
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Login to WAZAPP</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register("email")} type="email" />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" {...register("password")} type="password" />
          {errors.password && (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          )}
          <div className="text-right mt-1">
            <Link href="/forgot-password" className="text-xs underline">
              Forgot your password?
            </Link>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#634aff] hover:opacity-50 duration-300 cursor-pointer"
          // disabled={errors.email || errors.password}
        >
          Login
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </div>

      <ToastContainer />
    </form>
  );
}
