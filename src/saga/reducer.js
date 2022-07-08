import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    title: "",
    interests: [],
    medias: [],
  },
  reducers: {
    editTitle: (state, { payload, type }) => {
      return { ...state, title: payload };
    },
    editInterests: (state, { payload, type }) => {
      const interests = [payload, ...state.interests];
      return { ...state, interests: interests };
    },
    editMedias: (state, { payload, type }) => {
      const medias = [...payload];
      return { ...state, medias: medias };
    },
    addMedias: (state, { payload, type }) => {
      const medias = [...payload];
      return { ...state, medias: medias };
    },
  },
});

const rootReducer = combineReducers({
  formValues: formSlice.reducer,
});

export default rootReducer;
