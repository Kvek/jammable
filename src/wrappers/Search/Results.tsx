"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

import type { ImageBlobInterface } from "@types";

import { Tile } from "@components/shared/Tile";

export const Results = ({
  tiles,
}: {
  tiles: ImageBlobInterface[];
}): JSX.Element => {
  const query = useSearchParams().get("query");

  const data = query ? tiles.filter((t) => t.title.includes(query)) : tiles;

  return (
    <>
      {data.map(({ src, title }) => (
        <span className="m-2" key={src}>
          <Tile src={src} title={title} />
        </span>
      ))}
    </>
  );
};
