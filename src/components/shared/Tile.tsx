import React from "react";

import type { WrapperComponentType } from "@types";

export const Tile: WrapperComponentType = ({ children }) => (
  <div className="aspect-video h-[140px] w-[250px] border bg-slate-400 md:h-[195px] md:w-[350px]">
    {children}
  </div>
);
