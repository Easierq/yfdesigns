"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SearchToggle } from "./search-toggle";
import Image from "next/image";
// import { Badge } from "./ui/badge";
// import { QuickAccessIcon } from "./icons";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Features",
    href: "/#features",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  // {
  //   title: "Hover Card",
  //   href: "/docs/primitives/hover-card",
  //   description:
  //     "For sighted users to preview content available behind a link.",
  // },
];

export function MainNav() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center pt-3">
          {/* <span className="font-bold hidden md:block">YsDesigns</span> */}
          <Image
            src="/logo-new.svg"
            alt="logo"
            width={140}
            height={40}
            className="hidden md:block min-w-[140px]"
          />
        </Link>
        <div className="hidden md:flex gap-4 items-center w-full">
          <Link href="/courses">
            <span className="text-sm font-semibold cursor-pointer">
              Courses
            </span>
          </Link>
          <Link href="/pricing">
            <span className="text-sm font-semibold cursor-pointer">
              Pricing
            </span>
          </Link>
          <div className="w-[50%]">
            <SearchToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
