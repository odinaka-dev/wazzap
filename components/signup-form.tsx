import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-[#634aff]">Welcome to WAZAPP</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your details below to create an account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Name</Label>
          <Input id="name" type="text" placeholder="John Doe" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Phone Number</Label>
          <Input
            id="phonenumber"
            type="number"
            placeholder="(+234)-123-456-7890"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
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
          <Input id="password" type="password" required />
        </div>
        <Link href="/chats">
          <Button type="submit" className="w-full  bg-[#634aff]">
            Sign Up
          </Button>
        </Link>
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
  );
}
