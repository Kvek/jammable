import type { FC } from "react";
import React from "react";

import type { WrapperComponentType } from "@types";

import { cn } from "@lib/utils";
import { HeartIcon, PaperPlaneIcon, PersonIcon } from "@radix-ui/react-icons";

export const TileCta: FC<{ className?: string }> = ({
  className,
}): JSX.Element => (
  <div className={cn("flex select-none items-center", className)}>
    <span className="mr-1 flex w-7 flex-col items-center">
      <PersonIcon className="h-4 w-4" />
      <span className="mt-[.15rem] text-[10px]">20.5k</span>
    </span>
    <span className="mr-1 flex w-7 flex-col items-center">
      <HeartIcon className="h-4 w-4" />
      <span className="mt-[.15rem] text-[10px]">489</span>
    </span>
    <span className="mr-1 flex w-7 flex-col items-center">
      <PaperPlaneIcon className="h-4 w-4" />
      <span className="mt-[.15rem] text-[10px]">1.5k</span>
    </span>
  </div>
);
export const TileContent: FC<{ title: string }> = ({ title }) => (
  <div className="flex h-12 w-full bg-white px-2 py-2 text-black">
    <h3 className="flex flex-[2] items-center text-[20px] font-semibold capitalize">
      {title}
    </h3>
    <TileCta />
  </div>
);

export const Tile: WrapperComponentType<{ title: string }> = ({
  children,
  title,
}) => (
  <div className="relative h-[205px] min-w-[305px] overflow-hidden rounded-lg bg-gray-400 p-3 shadow-md md:h-[182px] md:w-[325px]">
    {children}
    <div className="absolute bottom-0 left-0 w-full">
      <TileContent title={title} />
    </div>
  </div>
);
