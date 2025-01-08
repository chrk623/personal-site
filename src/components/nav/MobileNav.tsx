"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/constants/nav";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";

export const MobileNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (id: string) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
    }
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen} defaultOpen={false}>
        <SheetTrigger asChild>
          <button className="p-2 text-primary hover:text-primary/80">
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] border-l border-primary/20 bg-background"
        >
          <SheetHeader>SECTIONS</SheetHeader>
          <nav className="mt-16 flex flex-col gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-sm tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
