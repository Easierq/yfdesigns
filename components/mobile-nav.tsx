"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "@/node_modules/next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <MobileLink
      href="/"
      className="flex items-center lg:hidden sm:block md:hidden pt-2"
      onOpenChange={setOpen}
    >
      <div className="flex items-center ml-[-8px]">
        {/* <span className="font-bold hidden md:block">YsDesigns</span> */}
        <Image
          src="/logo-new.svg"
          alt="logo"
          width={140}
          height={40}
          className="block md:hidden min-w-[140px]"
        />
      </div>
    </MobileLink>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
export default MobileNav;
