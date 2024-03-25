"use client";

import React from "react";

import { selectShowSearchState } from "@redux/search/selector";
import { setSearchVisibilityState } from "@redux/search/slice";
import { useAppDispatch, useAppSelector } from "@redux/store";

import { Button } from "@components/ui/Button";
import { Input } from "@components/ui/input";

import { FilterBadges } from "@wrappers";

import { cn } from "@lib/utils";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export const Search = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const showSearch = useAppSelector(selectShowSearchState);

  return (
    <div
      className={cn(
        "fixed bottom-0 top-0 z-10 flex h-svh w-svw flex-col bg-background p-4 transition-transform md:hidden",
        showSearch ? "translate-x-0" : "translate-x-[100%]",
      )}
    >
      <div>
        <Button
          onClick={() => dispatch(setSearchVisibilityState(false))}
          variant={"shell"}
        >
          <ArrowLeftIcon />
        </Button>
      </div>

      <div>
        <Input placeholder="Search all voices" type="search" />
        <span className="my-4">
          <FilterBadges />
        </span>
      </div>
    </div>
  );
};
