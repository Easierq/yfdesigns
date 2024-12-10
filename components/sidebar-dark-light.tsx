"use client";

import { Sun, MoonIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useThemeToggle } from "@/components/theme/useToggle";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function MobileDarkLight({ className, ...props }: ButtonProps) {
  const { hydrated } = useThemeToggle();
  const { setTheme } = useTheme();

  // TODO: fix layout shift from hydration
  if (!hydrated) return null;

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "flex items-center justify-center text-2xl rounded-md ml-[-8px]",
          className
        )}
        // title="Toggle theme"
        // aria-label="Toggle theme"
        {...props}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="size-[1em]" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "flex items-center justify-center text-2xl rounded-md ml-[-8px]",
          className
        )}
        // title="Toggle theme"
        // aria-label="Toggle theme"
        {...props}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-[1em]" />
      </Button>
    </div>
  );
}
