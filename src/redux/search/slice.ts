import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface SearchStateInterface {
  showSearch: boolean;
}

const initialState: SearchStateInterface = { showSearch: false };

const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {
    setSearchVisibilityState: (state, action: PayloadAction<boolean>) => {
      state.showSearch = action.payload;
    },
  },
});

const { actions, reducer } = searchSlice;

export const { setSearchVisibilityState } = actions;
export const search = reducer;
