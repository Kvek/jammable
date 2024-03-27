import type { ImageBlobInterface } from "@types";

import { Tile } from "@components/shared/Tile";

interface HeroPropsInterface {
  title: string;
  paths: ImageBlobInterface[];
}

export const Hero = ({ paths, title }: HeroPropsInterface): JSX.Element => (
  <div className="flex w-full flex-col overflow-hidden">
    <div>
      <h1 className="mb-2 select-none text-lg font-semibold capitalize opacity-80 md:text-3xl">
        {title}
      </h1>
    </div>

    <div className="my-2 flex overflow-scroll">
      {paths.map(({ src, title }) => (
        <span className="my-1 mr-2" key={src}>
          <Tile src={src} title={title} />
        </span>
      ))}
    </div>
  </div>
);
