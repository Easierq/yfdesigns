import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo-new.svg"
        alt="foodi"
        width={140}
        height={20}
        className="ml-[-8px] min-w-[140px]"
      />
    </Link>
  );
};
