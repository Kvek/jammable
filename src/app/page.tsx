import { type FC } from "react";

import { Input } from "@components/ui/input";

import { Banner, FilterBadges, Trending } from "@wrappers";

const Home: FC = () => (
  <div className="flex flex-col overflow-x-hidden">
    <Banner />

    <FilterBadges />

    <div className="hidden justify-center md:flex">
      <Input
        className="border md:max-w-[720px]"
        placeholder="Search all voices"
        type="search"
      />
    </div>

    <Trending />
  </div>
);

export default Home;
