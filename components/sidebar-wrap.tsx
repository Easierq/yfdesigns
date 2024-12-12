import React from "react";
import { Logo } from "./logo";
import { MobileDarkLight } from "./sidebar-dark-light";
import { Plus, Video } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { SheetClose } from "./ui/sheet";
import { cn } from "@/lib/utils";

export const SidebarWrap = () => {
  return (
    <div className="p-6 pt-14 w-full">
      <div className="w-full flex flex-col h-full">
        <div className="flex items-center justify-between mb-5">
          <Logo />
          <MobileDarkLight />
        </div>
        <Link
          href="/create-course"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "px-2 lg:px-3 text-muted w-full h-12 font-semibold flex items-center justify-center gap-1 mb-4 bg-primary hover:bg-primary/75 hover:text-muted"
          )}
        >
          <Plus className="w-4 h-4 font-bold mb-[1px]" />
          <p className="">Create course</p>
        </Link>
        <div className="flex flex-col mb-2">
          <p className="text-slate-400 mb-1">Courses</p>
          <div className="flex items-center gap-2 ml-1">
            <Video className="h-5 w-5" />
            <SheetClose asChild>
              <Link href={`/courses`} className="block">
                {/* <span className="font-medium text-xs">UI/UX</span> */}
                <p className="font-medium text-xs"> UI/UX</p>
              </Link>
            </SheetClose>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex w-full items-center justify-between gap-x-4">
            <Button
              size="sm"
              variant="ghost"
              className="bg-primary flex-1 hover:bg-primary/80"
              asChild
            >
              <Link href={`/login`}>
                <span className="text-muted">Sign in</span>
              </Link>
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="bg-primary flex-1 hover:bg-primary/80"
              asChild
            >
              <Link href={`/login`}>
                <span className="text-muted">Sign up</span>
              </Link>
            </Button>
          </div>
          {/* <Button
            size="sm"
            variant="ghost"
            className="bg-primary flex-1 hover:bg-primary/80"
            asChild
          >
            <Link href={`/login`}>
              <span className="text-muted">Log out</span>
            </Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
};
