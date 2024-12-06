import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export const MobileToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden bg-none p-0">
          <Menu className="h-9 w-9" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-0 flex gap-0">
        <span>To be continued</span>
      </SheetContent>
    </Sheet>
  );
};
