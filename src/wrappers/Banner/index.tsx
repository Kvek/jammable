import Image from "next/image";
import type { FC } from "react";

export const Banner: FC = () => (
  <div className="relative flex aspect-video w-full items-center justify-center lg:h-[460px]">
    <Image
      fill
      alt="banner"
      className="rounded-xl object-cover"
      src="/banner.png"
    />
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      <span className="absolute flex h-20 w-[80%] bg-black blur-[50px]" />
      <h1 className="z-10 w-[70%] text-center text-2xl font-extrabold text-white md:text-[3rem] md:leading-[4rem]">
        Create song covers using any voice with AI
      </h1>
    </div>
  </div>
);
