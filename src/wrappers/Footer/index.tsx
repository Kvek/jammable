import type { FC } from "react";

import { Navlinks } from "@wrappers/Navlinks";

export const Footer: FC = () => (
  <div className="fixed bottom-0 flex h-14 w-full shadow dark:border-t dark:shadow-dark md:hidden">
    <div className="fixed bottom-[-0.1rem] h-5 w-full select-none bg-shadow-rainbow blur-xl" />
    <div className="z-10 flex h-full w-full items-center justify-between bg-background px-2">
      <Navlinks />
    </div>
  </div>
);
