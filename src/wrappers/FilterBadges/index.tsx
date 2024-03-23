"use client";

import type { FC } from "react";

import { selectGenresListState } from "@redux/genres/selector";
import { useAppSelector } from "@redux/store";

import { Badge } from "@components/ui/badge";
import { Toggle } from "@components/ui/toggle";

export const FilterBadges: FC = () => {
  const filterData = useAppSelector(selectGenresListState);

  return (
    <div className="my-2 flex flex-wrap justify-center md:my-5">
      {filterData.map(({ key, title }) => (
        <Toggle aria-label="Toggle" className="m-[2px]" key={key}>
          <Badge className="p-1.5" variant="outline">
            {title}
          </Badge>
        </Toggle>
      ))}
    </div>
  );
};
