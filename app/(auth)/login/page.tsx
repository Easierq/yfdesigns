"use client";
// import { Metadata } from "next"
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/more-icons";
import { UserAuthForm } from "@/components/user-auth-form";
// import type { Metadata } from "next";

// import { useRouter } from 'next/navigation';
// export const metadata: Metadata = {
//   title: "Login",
//   description: "Login to your account",
// }

export default function LoginPage() {
  // const router = useRouter();
  // Force refresh the page
  // router.refresh();

  return (
    <div className="">
      <div className="flex h-[80vh] w-full flex-col items-center justify-center px-[4%] lg:px-[7%]">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[4%] md:left-[7%] top-[80px] md:top-[80px] bg-purple-200 hover:bg-purple-200/8 text-slate-900 dark:hover:text-slate-800 "
          )}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome to
              <span className="text-purple-800 ml-2">Ysdesigns</span>
            </h1>
            {/* <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p> */}
          </div>
          <UserAuthForm />
          {/* <p className="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              className="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}
