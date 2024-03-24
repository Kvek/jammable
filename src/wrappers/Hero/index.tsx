import React from "react";

import { Tile } from "@components/shared/Tile";

export const Hero = ({
  paths,
  title,
}: {
  title: string;
  paths: string[];
}): JSX.Element => (
  <div className="flex w-full flex-col overflow-hidden">
    <div>
      <h1 className="mb-2 select-none text-3xl font-semibold capitalize opacity-80">
        {title}
      </h1>
    </div>

    <div className="my-2 flex overflow-scroll">
      {paths.map((path) => (
        <span className="my-1 mr-2" key={path}>
          <Tile title="">path</Tile>
        </span>
      ))}
    </div>
  </div>
);
