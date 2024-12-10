"use client";

import { useEffect, useState } from "react";

import { Search } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import SearchForm from "./search-form";
import NavbarSearch from "./navbar-search";

export const SearchToggle = () => {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="bg-transparent h-auto p-0 flex items-center justify-center hover:bg-transparent mr-1 md:mr-0">
          <Search className="h-6 w-6 text-black dark:text-white md:hidden" />
          <SearchForm />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="p-0 h-[70vh] md:h-[500px] flex gap-0">
        <NavbarSearch setOpen={setOpen} />
      </SheetContent>
    </Sheet>
  );
};
