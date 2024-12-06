// import { BentoDemo } from "@/components/bento-features";
// import { Icons } from "@/components/icons";
// import BlurIn from "@/components/magicui/blur-in";
// import { BorderBeam } from "@/components/magicui/border-beam";
// import ShineBorder from "@/components/magicui/shine-border";
// import { Companies } from "@/components/social-proof";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "@/node_modules/next/link";
import React from "react";

function HeroPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center sm:mb-10 lg:mb-20 md:sm-20">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-20">
            Infusing Wisdom into Your Every Mood
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Popular Quotes for all categories from millions of books, people,
            and authors.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
            <a
              href="/#features"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-sm-2"
              )}
            >
              Let&apos;s Explore
            </a>
          </div>
          <div className="relative rounded-xl mx-auto justify-center flex flex-col items-center lg:max-w-[1000px] overflow-hidden md:overflow-auto lg:overflow-auto mt-12">
            <img
              src="/temp.png"
              alt="Hero Image"
              className="block lg:max-w-[1000px]  rounded-[inherit] border object-contain shadow-lg dark:hidden overflow-hidden md:overflow-auto lg:overflow-auto"
            />
          </div>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            YsDesigns - Unlock the Wisdom
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Let&apos;s Try Now -{" "}
            <a href="/login" className="underline underline-offset-4">
              Get Started
            </a>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}

export default HeroPage;