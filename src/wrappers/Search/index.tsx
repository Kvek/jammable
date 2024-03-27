import { FilterBadges } from "@wrappers";

import { getImages } from "@lib/utils";

import { Results } from "./Results";
import { SearchInput } from "./SearchInput";

export const Search = async (): Promise<JSX.Element> => {
  const data = await getImages();

  return (
    <div className="h-full w-full p-4">
      <div>
        <SearchInput />

        <span className="my-4">
          <FilterBadges />
        </span>
      </div>

      <div className="flex h-full w-full flex-wrap justify-center overflow-scroll pt-5">
        <Results tiles={data} />
      </div>
    </div>
  );
};
