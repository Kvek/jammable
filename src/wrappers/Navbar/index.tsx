import type { FC } from "react";

import { Avatar, Logo, Navlinks, ThemeToggle } from "@wrappers";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const Navbar: FC = () => (
  <div className="dark:shadow-dark fixed z-[3] flex h-16 w-full items-center shadow">
    <div className="bg-shadow-rainbow fixed h-5 w-full select-none blur-2xl" />
    <div className="z-10 flex h-full w-full items-center justify-between bg-background px-4">
      <div className="flex select-none items-center">
        <Logo />

        <div className="ml-2 text-xl font-semibold sm:text-2xl">
          <span className="bg-gradient-to-r from-pink-300 to-purple-700 bg-clip-text text-transparent">
            Jammable
          </span>
        </div>
      </div>

      <div className="hidden md:flex">
        <Navlinks />
      </div>

      <div className="flex items-center justify-evenly">
        <MagnifyingGlassIcon className="mx-2 h-[1.3rem] w-[1.3rem] md:hidden" />

        <ThemeToggle />

        <span className="ml-4 hidden md:flex">
          <Avatar />
        </span>
      </div>
    </div>
  </div>
);
