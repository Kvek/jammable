import Image from "next/image";
import type { FC } from "react";

const BannerPill: FC = () => (
  <div className="absolute bottom-0 z-10 mb-[-28px] flex h-16 w-52 flex-col items-center justify-evenly rounded-[48px] border bg-background p-2 md:mb-[-40px] md:h-20 md:w-64">
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
  <div className="relative flex aspect-video h-[200px] w-full items-center justify-center md:h-[460px]">
    <Image
      fill
      alt="banner"
      className="z-[1] rounded-xl object-cover"
      src="/banner.png"
    />

    <div className="relative z-[1] flex h-full w-full flex-col items-center justify-center text-white">
      <span className="absolute flex h-20 w-[80%] bg-black blur-[50px]" />
      <h1 className="z-10 w-[70%] text-center text-2xl font-extrabold  md:text-[3rem] md:leading-[4rem]">
        Create song covers using any voice with AI
      </h1>
    </div>

    <BannerPill />

    <div className="absolute bottom-2 z-0 h-5 w-full select-none bg-shadow-rainbow blur-xl" />
  </div>
);
