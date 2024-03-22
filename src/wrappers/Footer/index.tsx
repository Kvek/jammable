import type { FC } from "react";

import { Avatar, Navlinks } from "@wrappers";

export const Footer: FC = () => (
  <div className="dark:shadow-dark fixed bottom-0 flex h-14 w-full shadow dark:border-t md:hidden">
    <div className="bg-shadow-rainbow fixed bottom-[-0.1rem] h-5 w-full select-none blur-xl" />
    <div className="z-10 flex h-full w-full items-center justify-between bg-background px-4">
      <Navlinks>
        <li />
      </Navlinks>
      <Avatar />
    </div>
  </div>
);
