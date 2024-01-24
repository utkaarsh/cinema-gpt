import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleSearch: false,
    moviesName: null,
    moviesResult: null,
  },
  reducers: {
    addToggleSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
    addGptMovies: (state, action) => {
      const { moviesName, moviesResult } = action?.payload;
      state.moviesName = moviesName;
      state.moviesResult = moviesResult;
    },
    clearList: (state) => {
      state.moviesName = null;
    },
  },
});

export const { addToggleSearch, addGptMovies, clearList } = gptSlice.actions;
export default gptSlice.reducer;
