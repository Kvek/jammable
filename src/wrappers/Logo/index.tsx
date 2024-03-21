import Image from "next/image";
import type { FC } from "react";

export const Logo: FC = () => (
  <div className="relative flex h-7 w-7 sm:h-10 sm:w-10">
    <Image fill alt="logo" src="/image.webp" />
  </div>
);
