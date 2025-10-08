"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOut, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-chart-4/20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-3 lg:py-4">
        <div className="flex items-center gap-5">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <div
                className={`flex cursor-pointer flex-col items-start justify-center gap-[6px]`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span
                  className={`block h-[3px] w-8 bg-black ${hovered ? "bg-destructive" : ""} transition-all duration-300`}
                ></span>
                <span
                  className={`block h-[3px] bg-black transition-all duration-300 ${
                    hovered ? "bg-destructive w-8" : "w-5"
                  }`}
                ></span>
                <span
                  className={`block h-[3px] bg-black transition-all duration-300 ${
                    hovered ? "bg-destructive w-8" : "w-5"
                  }`}
                ></span>
              </div>
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#FFF1C1]">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="FazFood"
                      width={150}
                      height={50}
                      className="object-contain"
                    />
                  </Link>
                </SheetTitle>
                <div className="h-[2px] w-full bg-gray-300" />
              </SheetHeader>
              <div className="flex flex-col gap-3 px-4">
                <Link
                  href="/"
                  className="hover:bg-muted hover:text-destructive px-2 py-2 font-bold transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="hover:bg-muted hover:text-destructive px-2 py-2 font-bold transition-colors duration-300"
                >
                  Menu
                </Link>
                <Accordion type="single" collapsible className="px-2">
                  <AccordionItem value="pages">
                    <AccordionTrigger className="hover:text-destructive transition-colors duration-300">
                      Pages
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                      <Link
                        href="/about"
                        className="hover:text-destructive hover:bg-muted px-2 py-2 transition-colors duration-300"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/faq"
                        className="hover:text-destructive hover:bg-muted px-2 py-2 transition-colors duration-300"
                      >
                        FAQ’s
                      </Link>

                      <Link
                        href="/team"
                        className="hover:text-destructive hover:bg-muted px-2 py-2 transition-colors duration-300"
                      >
                        Our Team
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Link
                  href="/"
                  className="hover:bg-muted hover:text-destructive px-2 py-2 font-bold transition-colors duration-300"
                >
                  My order
                </Link>
                <Link
                  href="/"
                  className="hover:bg-muted hover:text-destructive px-2 py-2 font-bold transition-colors duration-300"
                >
                  Contact us
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="FazFood"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCart size={33} className="text-destructive cursor-pointer" />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="border-primary relative h-10 w-10 cursor-pointer overflow-hidden rounded-full border-2">
                <Image
                  src="/profile.png"
                  alt="profile"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuGroup>
                <DropdownMenuItem>Loged as : PixelNoah</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Logout <LogOut />
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
