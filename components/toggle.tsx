// "use client";

// import * as React from "react";
// import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
// import { useTheme } from "next-themes";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from "@/lib/utils";

// export function ModeToggle() {
//   const { setTheme, theme } = useTheme();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => setIsClient(true), []);
//   if (!isClient) return null;

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           // size="icon"
//           className="border-none items-center justify-center hidden md:flex bg-transparent p-0 hover:bg-transparent"
//         >
//           <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       {theme === "light" ? (
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem onClick={() => setTheme("dark")}>
//             Dark
//             <MoonIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("light")}>
//             Light <SunIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       ) : (
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem onClick={() => setTheme("light")}>
//             Light <SunIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("dark")}>
//             Dark
//             <MoonIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       )}
//     </DropdownMenu>
//   );
// }

"use client";

import { Sun, MoonIcon, Moon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useThemeToggle } from "@/components/theme/useToggle";

import { cn } from "@/lib/utils";

export function ModeToggle({ className, ...props }: ButtonProps) {
  const { isDark, toggle, hydrated } = useThemeToggle();

  // TODO: fix layout shift from hydration
  if (!hydrated) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "hidden md:flex items-center justify-center text-2xl rounded-md ml-[-8px] h-8 w-8 bg-accent",
        className
      )}
      // title="Toggle theme"
      // aria-label="Toggle theme"
      {...props}
      onClick={toggle}
    >
      {isDark ? (
        <Sun className="size-[1em]" />
      ) : (
        // <Moon className="size-[1em] fill-current text-slate-500" />
        <MoonIcon className="size-[1em]" />
      )}
    </Button>
  );
}
