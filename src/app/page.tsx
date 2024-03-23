"use client";

import type { FC } from "react";

import { selectGenresListState } from "@redux/genres/selector";
import { useAppSelector } from "@redux/store";

import { Input } from "@components/ui/input";

import { Banner, FilterBadges, Tiles, Trending } from "@wrappers";

const Home: FC = () => {
  const genreData = useAppSelector(selectGenresListState);

  return (
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

      {genreData.map(({ key, title }) => (
        <Tiles id={key} key={key} title={title} />
      ))}
    </div>
  );
};

export default Home;
