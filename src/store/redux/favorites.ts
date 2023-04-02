import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { FavoritesActionI, FavoritesState } from "../../types/redux";

// Define the initial state using that type
const initialState: FavoritesState = {
  ids: [],
};

export const favoriteMealSlice = createSlice({
  name: "favorites",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavorite: (state, action: FavoritesActionI) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: FavoritesActionI) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteMealSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectFavorite = (state: RootState) => state.favorites.ids;

export default favoriteMealSlice.reducer;
