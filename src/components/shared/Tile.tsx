import React from "react";

import type { WrapperComponentType } from "@types";

import { HeartIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";

export const Tile: WrapperComponentType<{ title: string }> = ({
  children,
  title,
}) => (
  <div className="relative h-[205px] min-w-[305px] overflow-hidden rounded-lg bg-gray-400 p-3 shadow-md md:h-[182px] md:w-[325px]">
    {children}

    <div className="absolute bottom-0 left-0 flex h-12 w-full bg-white px-2 py-1 text-black">
      <h3 className="flex flex-[2] items-center text-[16px] font-semibold">
        {title}
      </h3>
      <div className="flex select-none items-center">
        <span className="mx-1 flex w-7 flex-col items-center">
          <PersonIcon className="h-4 w-4" />
          <span className="mt-[.15rem] text-[10px]">20.5k</span>
        </span>
        <span className="mx-1 flex w-7 flex-col items-center">
          <HeartIcon className="h-4 w-4" />
          <span className="mt-[.15rem] text-[10px]">489</span>
        </span>
        <span className="mx-1 flex w-7 flex-col items-center">
          <PaperPlaneIcon className="h-4 w-4" />
          <span className="mt-[.15rem] text-[10px]">1.5k</span>
        </span>
      </div>
    </div>
  </div>
);
