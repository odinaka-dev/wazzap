"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import Link from "next/link";

import { Register as registerAPI } from "@/services/auth.service";
import { RegisterUsersSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as z from "zod";
import { useStore } from "@/Zustand/store/useStore";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { setIsLoggedIn, setUser } = useStore();
  const router = useRouter();

  const { mutateAsync: Register } = useMutation({
    mutationKey: ["register"],
    mutationFn: registerAPI,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    getValues,
    reset,
    control,
  } = useForm<z.infer<typeof RegisterUsersSchema>>({
    resolver: zodResolver(RegisterUsersSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterUsersSchema>) {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      userName: values.userName,
      phoneNumber: Number(values.phoneNumber),
      email: values.email,
      password: values.password,
    };

    const response = await Register(payload);

    if (!response.success) {
      setUser(response.data);
      setIsLoggedIn(true);
      setTimeout(() => {
        router.push("/login");
      }, 5000);
      const notify = toast.success(response.message);
      notify;
    } else {
      // Handle failure case
      console.error("Registration failed:", response.message);
      const notify = toast.error(
        `wazap couldn't process your registration, Your account creation was not successful`
      );
      notify;
    }
  }

  return (
    <div>
      <ToastContainer />
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={handleSubmit(onSubmit)}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-[#634aff]">
            Welcome to WAZAPP
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your details below to create an account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="first Name">First Name</Label>
            <Input
              {...register("firstName")}
              id="name"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              {...register("lastName")}
              id="name"
              type="text"
              placeholder="last Name"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="UserName">User Name</Label>
            <Input
              {...register("userName")}
              id="name"
              type="text"
              placeholder="Preferred user Name"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              {...register("phoneNumber")}
              id="phonenumber"
              type="number"
              placeholder="(+234)-123-456-7890"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="wazzap@gmail.com"
              required
            />
          </div>
          <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              {...register("password")}
              id="password"
              type="password"
              required
            />
          </div>
          <Button type="submit" className="w-full  bg-[#634aff]">
            Sign Up
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or
            </span>
          </div>
        </div>
        <div className="text-center text-sm">
          already have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            Log in
          </a>
        </div>
      </form>
    </div>
  );
}
