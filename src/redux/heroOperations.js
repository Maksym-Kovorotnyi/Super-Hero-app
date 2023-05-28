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
  async (
    { nickname, real_name, origin_description, catch_phrase, images },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.post(`/api/heroes`, {
        nickname,
        real_name,
        origin_description,
        catch_phrase,
        images,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const deleteNotice = createAsyncThunk(
//   "notices/deleteNotice",
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`notices/${id}`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getUserNotices = createAsyncThunk(
//   "notices/getUserNotices",
//   async ({ page, query = "" }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         `notices/user?page=${page}&limit=10&title=${query}`
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getNoticesByQwery = createAsyncThunk(
//   "notices/getNoticesByQwery",
//   async ({ query, category, page = 1, limit = 12 }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         `notices/find?title=${query}&category=${category}&page=${page}&limit=${limit}`
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const createNotice = createAsyncThunk(
//   "notices/create",
//   async ({ values, accessToken, avatar }, thunkAPI) => {
//     try {
//       const formData = new FormData();
//       formData.append("avatar", avatar);
//       formData.append("category", values.category);
//       formData.append("title", values.title);
//       formData.append("name", values.name);
//       formData.append("birthday", values.birthday);
//       formData.append("breed", values.breed);
//       formData.append("sex", values.sex);
//       formData.append("location", values.location);
//       formData.append("comments", values.comments);
//       if (values.category === "sell") {
//         formData.append("price", values.price);
//       }
//       const header = {
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       };
//       const { data } = await axios.post("/notices", formData, header, avatar);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

// export const getNoticesByQweryOwner = createAsyncThunk(
//   "notices/getNoticesByQweryOwner",
//   async ({ query, page = 1, limit = 12 }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         `notices/owner?title=${query}&page=${page}&limit=${limit}`
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getNoticesByQweryFavorite = createAsyncThunk(
//   "notices/getNoticesByQweryFavorite",
//   async ({ query, page = 1, limit = 12 }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         `notices/favorite?title=${query}&page=${page}&limit=${limit}`
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
