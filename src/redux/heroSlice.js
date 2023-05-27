import { createSlice } from "@reduxjs/toolkit";
import { getHeroList } from "./heroOperations";

const heroesInitialState = {
  heroes: [],
  total: 0,
  isLoading: false,
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState: heroesInitialState,
  extraReducers: (builder) => {
    builder.addCase(getHeroList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getHeroList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.heroes = payload.heroes;
      state.total = payload.total;
    });
    builder.addCase(getHeroList.rejected, (state) => {
      state.isLoading = false;
    });
  },
  reducers: {
    // clearNotices(state, { payload }) {
    //   state.notices = payload;
    // },
  },
});

export const heroesReducer = heroesSlice.reducer;
// export const { для звичайних редюсорів } = heroesSlice.actions;
