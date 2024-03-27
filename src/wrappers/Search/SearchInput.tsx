"use client";

import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { Input } from "@components/ui/input";

export const SearchInput = (): JSX.Element => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (term: string): void => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    const url = `${pathname}?${params.toString()}`;
    router.replace(url as Route);
  };

  return (
    <Input
      defaultValue={searchParams.get("query")?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      placeholder="Search all voices"
      type="search"
    />
  );
};
