import type { FC } from "react";

import { Logo, ThemeToggle } from "@wrappers";

export const Navbar: FC = () => (
  <div className="dark:shadow-dark fixed z-[1] flex h-16 w-full items-center shadow">
    <div className="bg-shadow-rainbow fixed h-5 w-full select-none blur-2xl" />
    <div className="z-10 flex h-full w-full items-center justify-between bg-background px-2">
      <div className="flex select-none">
        <Logo />

        <div className="ml-2 text-3xl font-semibold">
          <span className="bg-gradient-to-r from-pink-300 to-purple-700 bg-clip-text text-transparent">
            Jammable
          </span>
        </div>
      </div>

      <ThemeToggle />
    </div>
  </div>
);
