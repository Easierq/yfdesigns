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
    <div className="md:flex w-full">
      <Link href="/" className="flex items-center mr-2">
        <span className="font-bold hidden md:block">YsDesigns</span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-sm font-semibold">
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px]">
                <li className="row">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-bold">
                        YsDesigns
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Do not underestimate what design can make to your day
                        and life
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/courses">
              <span className="text-sm font-semibold mr-4 cursor-pointer">
                Courses
              </span>
            </Link>
            <Link href="/pricing">
              <span className="text-sm font-semibold cursor-pointer">
                Pricing
              </span>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
