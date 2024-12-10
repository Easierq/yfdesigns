"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { QuickAccessIcon } from "./icons";
import { SidebarWrap } from "./sidebar-wrap";

export const MobileToggle = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden bg-none p-0 hover:bg-transparent dark:hover:bg-transparent"
        >
          {/* <Menu className="h-9 w-9" /> */}
          <QuickAccessIcon className="h-8 w-8 ml-2 hover:bg-none dark:hover:bg-none" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex gap-0">
        <SidebarWrap />
      </SheetContent>
    </Sheet>
  );
};
