import { CreditCard, BookOpen, LogOut, Settings, User } from "lucide-react";
import Link from "@/node_modules/next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "./user-avatar";

export function UserDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserAvatar src="/23.jpg" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/create-course">
            <DropdownMenuItem>
              <User />
              <span>My Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/create-course">
            <DropdownMenuItem>
              <BookOpen />
              <span>Browse courses</span>
            </DropdownMenuItem>
          </Link>
          {/* <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
