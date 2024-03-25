"use client";

import { AudioLinesIcon } from "lucide-react";
import type { FC } from "react";

import { setSearchVisibilityState } from "@redux/search/slice";
import { useAppDispatch } from "@redux/store";

import { Button } from "@components/ui/Button";

import { AvatarIcon, Navlinks, ThemeToggle } from "@wrappers";

import { BellIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

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

        <div className="hidden w-full justify-end border-r-2 py-1 pr-6 md:flex">
          <Navlinks />
        </div>

        <div className="ml-2 flex h-full items-center gap-[.25rem]">
          <Button className="flex md:hidden" size={"icon"} variant={"shell"}>
            <MagnifyingGlassIcon
              height={18}
              onClick={() => dispatch(setSearchVisibilityState(true))}
              width={18}
            />
          </Button>

          <ThemeToggle />

          <Button size={"icon"} variant={"shell"}>
            <BellIcon height={18} width={18} />
          </Button>

          <Button className="hidden md:flex" size={"icon"} variant={"shell"}>
            <AvatarIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
