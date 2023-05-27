import { createSlice } from "@reduxjs/toolkit";
import { getHeroList, getOneHeroInfo } from "./heroOperations";

const heroesInitialState = {
  heroes: [],
  heroCard: [],
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
    builder.addCase(getOneHeroInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOneHeroInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.heroCard = payload;
    });
    builder.addCase(getOneHeroInfo.rejected, (state) => {
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
