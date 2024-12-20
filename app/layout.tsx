// import { MainNav } from "@/components/main-nav";
// import { cn } from "@/lib/utils";
// import { fontSans } from "@/lib/fonts";
// import Link from "@/node_modules/next/link";
// import { buttonVariants } from "@/components/ui/button";
// import { ModeToggle } from "@/components/toggle";
// import MobileNav from "@/components/mobile-nav";

import "./globals.css";
// import { Toaster } from "sonner";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/providers/toaster-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simplify | Your way to success.",
  description: "Simplifying your way to the top",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-white dark:bg-[#000000]")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-black">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
          </div>
          <ToastProvider />
          <ModalProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
