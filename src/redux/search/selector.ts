import type { ReduxStateType } from "@redux/store";

import type { SearchStateInterface } from "./slice";

export const selectSearchState = ({
  search,
}: ReduxStateType): SearchStateInterface => search;

export const selectShowSearchState = ({
  search: { showSearch },
}: ReduxStateType): boolean => showSearch;
