import type { FC } from "react";

import { Badge } from "@components/ui/badge";
import { Toggle } from "@components/ui/toggle";

const filterData = [
  "Trending",
  "Popular",
  "Music",
  "Cartoon",
  "Anime",
  "Gaming",
  "German",
  "Korean",
  "French",
  "Public figure",
];

export const FilterBadges: FC = () => (
  <div className="m-2 md:mx-auto md:my-5">
    {filterData.map((f) => (
      <Toggle aria-label="Toggle" className="m-[2px]" key={f}>
        <Badge className="p-1.5" variant="outline">
          {f}
        </Badge>
      </Toggle>
    ))}
  </div>
);
