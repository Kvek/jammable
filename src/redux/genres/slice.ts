import { createSlice } from "@reduxjs/toolkit";

export interface GenreStateInterface {
  list: Array<{ key: string; title: string }>;
}

const initialState: GenreStateInterface = {
  list: [
    { key: "popular", title: "Popular" },
    { key: "music", title: "Music" },
    { key: "cartoon", title: "Cartoon" },
    { key: "anime", title: "Anime" },
    { key: "genreaming", title: "Gaming" },
    { key: "german", title: "German" },
    { key: "korean", title: "Korean" },
    { key: "french", title: "French" },
    { key: "public_figure", title: "Public figure" },
  ],
};

const genreSlice = createSlice({
  initialState,
  name: "genre",
  reducers: {},
});

const { reducer } = genreSlice;
export const genres = reducer;
