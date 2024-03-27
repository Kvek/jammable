import Image from "next/image";
import type { FC } from "react";

import { Button } from "@components/ui/Button";

export const BannerPill: FC = () => (
  <div className="absolsute bottom-0 z-[2] mb-[-28px] flex h-16 w-52 flex-col items-center justify-evenly rounded-[45px] bg-background p-2  md:h-20 md:w-64">
    <div className="flex items-center justify-center">
      <a
        className="relative mx-2 h-6 w-6 md:h-7 md:w-7"
        href="https://www.instagram.com/getjammable/"
      >
        <Image fill alt="instagram" src="/insta.svg" />
      </a>
      <a
        className="relative mx-2 h-6 w-6 md:h-7 md:w-7"
        href="https://www.tiktok.com/@getjammable"
      >
        <Image fill alt="ticktok" src="/tt.svg" />
      </a>
      <a
        className="relative mx-2 h-6 w-6 md:h-7 md:w-7"
        href="https://www.youtube.com/@jammable"
      >
        <Image fill alt="youtube" src="/yt.svg" />
      </a>
    </div>

    <p className="mt-1 text-[10px] text-foreground md:text-[14px]">
      100M+ views
    </p>
  </div>
);

export const Banner: FC = () => (
  <div className="relative mb-20 flex h-[200px] w-full select-none pl-[3rem] md:h-[420px]">
    <div className="flex flex-1 flex-col">
      <div className="relative z-[1] flex h-full flex-col justify-center">
        <h1 className="z-10 text-4xl font-bold dark:text-pink-200 md:text-[3.25rem] md:leading-[5rem]">
          Create without limits
        </h1>
        <h1 className="z-10 w-[80%] text-4xl font-semibold opacity-70 dark:opacity-100 md:text-[2rem] md:leading-[3rem]">
          Generate song covers with any voice using AI
        </h1>
      </div>

      <div>
        <Button
          className="text-md w-[200px] bg-gradient-to-r from-pink-500 to-purple-700 px-2 py-3 font-bold capitalize text-white dark:from-pink-400 dark:to-purple-700"
          variant={"shell"}
        >
          Start jamming
        </Button>
      </div>
    </div>

    <div className="relative hidden w-full flex-1 md:flex">
      <div className="absolute min-h-full min-w-full overflow-hidden">
        <Image
          fill
          alt="banner"
          className="scale-[2] object-contain"
          src="/banner.png"
          style={{ left: "10%", top: "15%" }}
        />
      </div>
    </div>
  </div>
);
