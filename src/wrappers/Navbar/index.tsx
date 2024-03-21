import type { FC } from "react";

import { Logo, ThemeToggle } from "@wrappers";
import { Navlinks } from "@wrappers/Navlinks";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const Navbar: FC = () => (
  <div className="fixed z-[3] flex h-16 w-full items-center shadow dark:shadow-dark">
    <div className="fixed h-5 w-full select-none bg-shadow-rainbow blur-2xl" />
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

      <div className="flex items-center">
        <MagnifyingGlassIcon className="mx-2 h-[1.3rem] w-[1.3rem] md:hidden" />

        <ThemeToggle />
      </div>
    </div>
  </div>
);