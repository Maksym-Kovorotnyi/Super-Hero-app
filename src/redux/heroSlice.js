import { createSlice } from "@reduxjs/toolkit";
import {
  deleteHero,
  getHeroList,
  getOneHeroInfo,
  createHero,
  updateHero,
} from "./heroOperations";

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

    builder.addCase(deleteHero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteHero.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteHero.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(createHero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createHero.fulfilled, (state, { payload }) => {
      state.heroes.push(payload);
      state.isLoading = false;
    });
    builder.addCase(createHero.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateHero.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateHero.fulfilled, (state, { payload }) => {
      state.heroCard = payload;
      state.isLoading = false;
    });
    builder.addCase(updateHero.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const heroesReducer = heroesSlice.reducer;
