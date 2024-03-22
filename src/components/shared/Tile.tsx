import React from "react";

import type { WrapperComponentType } from "@types";

export const Tile: WrapperComponentType = ({ children }) => (
  <div className="aspect-video h-[110px] w-[200px] border bg-slate-400 md:h-[168px] md:w-[300px]">
    {children}
  </div>
);
