import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  repo: [],
};

const reduxState = createSlice({
  name: "Folio_Repo",
  initialState,
  reducers: {
    addRepo: (state, { payload }) => {
      state.repo = payload;
    },
  },
});

export const { addRepo } = reduxState.actions;

export default reduxState.reducer;
