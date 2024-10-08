"use client";
import { ProgressBarLink } from "./progress-bar";
import RSAPLogo from "../icons/logo";
import { MobileNavigation, Navigation } from "./navigation";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { useScrollPosition } from "@/utils/hooks/use-scroll-position";
import { cn } from "@/utils/shadcn";
import { usePathname } from "next/navigation";

export function Header() {
  const scroll = useScrollPosition();
  const path = usePathname();
  return (
    <header
      className={cn(
        "sticky -top-1 z-[11]  h-16 flex items-center justify-between ",
        path !== "/" || scroll > 50 ? "bg-background" : ""
      )}
    >
      <div className="flex justify-between items-center gap-4 container-x">
        <nav
          className={cn(
            "hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
          )}
        >
          <ProgressBarLink
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <RSAPLogo className="size-8 fill-rsap" />
            <span className="sr-only">RSAP</span>
          </ProgressBarLink>

          <Navigation />
        </nav>
        <div className="flex items-center gap-5 md:hidden">
          <MobileNavigation />
          <ProgressBarLink href="/">
            <RSAPLogo className="size-7 fill-rsap" />
          </ProgressBarLink>
        </div>
        <div className="flex gap-2 items-center flex-shrink-0">
          <ProgressBarLink href={"/join"}>
            <Button text="Join RSAP" className="w-fit flex-shrink-0" />
          </ProgressBarLink>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
