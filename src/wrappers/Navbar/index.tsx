"use client";

import { AudioLinesIcon } from "lucide-react";
import type { FC } from "react";

import { setSearchVisibilityState } from "@redux/search/slice";
import { useAppDispatch } from "@redux/store";

import { AvatarIcon, Navlinks, ThemeToggle } from "@wrappers";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export const Navbar: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed z-[3] flex h-16 w-full items-center shadow dark:shadow-dark">
      <div className="fixed h-5 w-full select-none bg-shadow-rainbow blur-2xl" />
      <div className="z-10 flex h-full w-full items-center justify-between bg-background px-4">
        <div className="flex select-none items-center">
          <AudioLinesIcon className="stroke-[2] text-pink-500 dark:text-pink-300" />

          <div className="ml-2 text-xl font-semibold sm:text-2xl">
            <span className="bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent dark:from-pink-400 dark:to-purple-700">
              Jammable
            </span>
          </div>
        </div>

        <div className="hidden md:flex">
          <Navlinks />
        </div>

        <div className="flex items-center justify-evenly">
          <MagnifyingGlassIcon
            className="mx-2 h-[1.3rem] w-[1.3rem] md:hidden"
            onClick={() => dispatch(setSearchVisibilityState(true))}
          />

          <ThemeToggle />

          <span className="ml-4 hidden md:flex">
            <AvatarIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
