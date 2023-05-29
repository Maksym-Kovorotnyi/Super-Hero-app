import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://superhero-back.onrender.com";

export const getHeroList = createAsyncThunk(
  "heroes/getHeroList",
  async ({ page = 1, limit = 5 }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/api/heroes?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOneHeroInfo = createAsyncThunk(
  "heroes/getOneHeroInfo",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`api/heroes/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  "heroes/deleteHero",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`api/heroes/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createHero = createAsyncThunk(
  "heroes/createHero",
  async (heroInfo, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/api/heroes`, heroInfo);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  "heroes/updateHero",
  async ({ id, updateInfo }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/api/heroes/${id}`, updateInfo);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
