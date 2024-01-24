import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
    toggleHeader: false,
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    setToggleHeader: (state) => {
      state.toggleHeader = !state.toggleHeader;
    },
  },
});

export const { changeLanguage, setToggleHeader } = configSlice.actions;

export default configSlice.reducer;
