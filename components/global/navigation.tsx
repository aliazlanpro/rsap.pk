"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import React, { useState } from "react";
import {
  FileIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  IdCardIcon,
  InfoCircledIcon,
  MixIcon,
  PersonIcon,
  PieChartIcon,
  QuestionMarkCircledIcon,
  RocketIcon,
  StarIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import { ProgressBarLink } from "./progress-bar";
import MicroscopeIcon from "../icons/microscope";
import GraduationCapIcon from "../icons/graduation-cap";
import RSAPLogo from "../icons/logo";
import UsersIcon from "../icons/users";
import UserScreenIcon from "../icons/user-screen";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { siteConfig } from "@/utils/constants";
import { usePathname } from "next/navigation";
import { Monitor } from "lucide-react";

type IconMenu = {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const committees: IconMenu[] = [
  {
    title: "Research & Publications",
    href: "/committees/research-and-publications",
    description: "Leading radiology research",
    icon: <MicroscopeIcon className="size-4" />,
  },
  {
    title: "Mentorship & Education",
    href: "/committees/mentorship-and-education",
    description: "Learn from radiology experts",
    icon: <GraduationCapIcon className="size-4" />,
  },
  {
    title: "Advocacy & Networking",
    href: "/committees/advocacy-and-networking",
    description: "Expanding radiology nationwide",
    icon: <GlobeIcon />,
  },
];

const association: IconMenu[] = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about RSAP",
    icon: <InfoCircledIcon />,
  },
  {
    title: "Board of Directors",
    href: "/board-of-directors",
    description: "RSAP Leadership",
    icon: <UsersIcon className="size-3.5" />,
  },
  {
    title: "Board of Advisors",
    href: "/board-of-advisors",
    description: "RSAP Advisors",
    icon: <UserScreenIcon className="size-3.5" />,
  },
  {
    title: "Associate Directors",
    href: "/associate-directors",
    description: "RSAP Associate Directors",
    icon: <UsersIcon className="size-3.5" />,
  },
  {
    title: "Constitutional Bylaws",
    href: "/bylaws",
    description: "Read the RSAP Bylaws",
    icon: <FileIcon />,
  },
];
export const membership: IconMenu[] = [
  {
    title: "Join RSAP",
    href: "/join",
    description: "Become an RSAP Member today",
    icon: (
      <RSAPLogo className="size-4 fill-muted-foreground group-hover:fill-white" />
    ),
  },
  {
    title: "FAQs",
    href: "/membership/faqs",
    description: "Are you eligible for membership?",
    icon: <QuestionMarkCircledIcon />,
  },
];
export const network: IconMenu[] = [
  {
    title: "Ambassador Program",
    href: "/ambassador-program",
    description: "Become an Ambassador for RSAP",
    icon: <RocketIcon />,
  },
  {
    title: "Radiology Interest Groups",
    href: "/radiology-interest-groups",
    description: "RSAP-affiliated RIGs",
    icon: <UsersIcon className="size-3.5" />,
  },
];
export const partnerships: IconMenu[] = [
  {
    title: "DataCamp Donates",
    href: "/datacamp",
    description: "Get free access to DataCamp",
    icon: <PieChartIcon />,
  },
  {
    title: "AMBOSS",
    href: "/amboss",
    description: "RSAP x AMBOSS Partnership",
    icon: <MixIcon className="size-3.5" />,
  },
  {
    title: "Med School Bootcamp",
    href: "/medschoolbootcamp",
    description: "Get 25% discount on subscription",
    icon: <StarIcon />,
  },
];
export const education: IconMenu[] = [
  {
    title: "Webinars",
    href: "/education/webinars",
    description: "Impactful and educational sessions",
    icon: <VideoIcon className=" size-3.5" />,
  },
  {
    title: "Dr. Omer Awan",
    href: "/education/dr-omer-awan",
    description: "Educational resources",
    icon: <PersonIcon className="size-3.5" />,
  },
];
export const research: IconMenu[] = [
  {
    title: "Research Projects",
    href: "/research",
    description: "Ongoing and published projects",
    icon: <MicroscopeIcon className="size-3.5" />,
  },
];

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-2 lg:px-3 py-1.5 text-muted-foreground font-normal">
            Membership
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[300px]  p-3 bg-background">
              <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                Become an RSAP Member
              </h5>
              <ul className="">
                {membership.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-2 lg:px-3 py-1.5 text-muted-foreground font-normal">
            Association
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" w-[250px]  p-3">
              <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                About RSAP
              </h5>
              <ul className="">
                {association.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-2 lg:px-3 py-1.5 text-muted-foreground font-normal">
            Explore
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* lg:col-span-3 lg:min-w-[850px] */}
            <div className="grid grid-cols-2 min-w-[600px]">
              <div className=" w-[300px]  p-3">
                <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                  Working Committees
                </h5>
                <ul className="">
                  {committees.map((c) => (
                    <li key={c.href}>
                      <IconMenu
                        title={c.title}
                        href={c.href}
                        icon={c.icon}
                        description={c.description}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" w-[250px]  p-3">
                <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                  Networking in RSAP
                </h5>
                <ul className="">
                  {network.map((c) => (
                    <li key={c.href}>
                      <IconMenu
                        title={c.title}
                        href={c.href}
                        icon={c.icon}
                        description={c.description}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              {/* lg:col-span-1 */}
              <div className="  p-3  col-span-2 ">
                {/*  lg:grid-cols-1 */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                      Education
                    </h5>
                    <ul className="">
                      {education.map((c) => (
                        <li key={c.href}>
                          <IconMenu
                            title={c.title}
                            href={c.href}
                            icon={c.icon}
                            description={c.description}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className=" text-sm py-2  px-3 font-normal text-muted-foreground">
                      Research
                    </h5>
                    <ul className="">
                      {research.map((c) => (
                        <li key={c.href}>
                          <IconMenu
                            title={c.title}
                            href={c.href}
                            icon={c.icon}
                            description={c.description}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm rounded-full border-0 px-2 lg:px-3 py-1.5 text-muted-foreground font-normal">
            Partnerships
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" p-3 min-w-[600px]">
              <h5 className=" text-sm py-2 px-3 font-normal text-muted-foreground">
                Our Partners
              </h5>
              <div className="grid grid-cols-2 ">
                {partnerships.map((c) => (
                  <div key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem className="hidden lg:block">
          <ProgressBarLink
            className="inline-flex h-9 w-max items-center justify-center transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal hover:bg-accent"
            href={"/datacamp"}
          >
            DataCamp
          </ProgressBarLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden lg:block">
          <ProgressBarLink
            className="inline-flex h-9 w-max items-center justify-center transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal hover:bg-accent"
            href={"/amboss"}
          >
            AMBOSS
          </ProgressBarLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden lg:block">
          <ProgressBarLink
            className="inline-flex h-9 w-max items-center justify-center transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal hover:bg-accent"
            href={"/bootcamp"}
          >
            Bootcamp
          </ProgressBarLink>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <ProgressBarLink
            className="inline-flex h-9 w-max items-center justify-center transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-sm rounded-full border-0 px-3 py-1.5 text-muted-foreground font-normal hover:bg-accent"
            href={"/news"}
          >
            News
          </ProgressBarLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="shrink-0">
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </SheetTrigger>

      <SheetContent side="left" className=" overflow-y-auto w-[90%]">
        <nav className="grid gap-6 text-lg font-medium">
          <ProgressBarLink
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <RSAPLogo className="size-8 fill-rsap" />
            <span className="sr-only">{siteConfig.name}</span>
          </ProgressBarLink>
          <div className="flex flex-col gap-6">
            {path !== "/" && (
              <ProgressBarLink href="/" onClick={() => setOpen(false)}>
                <h4 className=" text-lg   font-medium">Home</h4>
              </ProgressBarLink>
            )}
            <div>
              <h4 className=" text-lg   font-medium">Membership</h4>
              <h5 className=" text-sm py-1  font-normal text-muted-foreground">
                Become an RSAP Member
              </h5>
              <ul>
                {membership.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className=" text-lg   font-medium">Association</h4>
              <h5 className=" text-sm py-1  font-normal text-muted-foreground">
                About RSAP
              </h5>
              <ul>
                {association.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className=" text-lg   font-medium">Working Committees</h4>
              <h5 className=" text-sm py-1  font-normal text-muted-foreground">
                RSAP Working Committees
              </h5>
              <ul>
                {committees.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className=" text-lg   font-medium">Network</h4>
              <h5 className=" text-sm py-1  font-normal text-muted-foreground">
                Network with RSAP
              </h5>
              <ul>
                {network.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className=" text-lg   font-medium">Education</h4>
              <h5 className=" text-sm py-1  font-normal text-muted-foreground">
                Educational Opportunities
              </h5>
              <ul>
                {education.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
                {partnerships.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className=" text-lg   font-medium">Research</h4>
              <h5 className=" text-sm py-1  font-normal text-muted-foreground">
                Research at RSAP
              </h5>
              <ul>
                {research.map((c) => (
                  <li key={c.href}>
                    <IconMenu
                      title={c.title}
                      href={c.href}
                      icon={c.icon}
                      description={c.description}
                      onClick={() => setOpen(false)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className=" text-lg   font-medium">Updates</h4>
              <h5 className=" text-sm py-1  font-normal text-muted-foreground">
                Latest updates from RSAP
              </h5>
              <ul>
                <li>
                  <IconMenu
                    title="News"
                    href="/news"
                    icon={<IdCardIcon className="size-4" />}
                    description="Read the latest news from RSAP"
                    onClick={() => setOpen(false)}
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function IconMenu({ title, description, icon, href, onClick }: IconMenu) {
  return (
    <ProgressBarLink
      href={href}
      className="flex hover:cursor-pointer group items-center gap-3 outline-none select-none text-sm  p-3 rounded-[6px]"
      onClick={onClick}
    >
      <div className=" size-8 border flex-shrink-0 rounded grid place-items-center text-muted-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-8 font-medium mb-0.5 whitespace-nowrap">
          {title}
        </div>
        <p className=" text-xs truncate font-normal text-muted-foreground group-hover:text-foreground whitespace-nowrap transition-colors">
          {description}
        </p>
      </div>
    </ProgressBarLink>
  );
}
