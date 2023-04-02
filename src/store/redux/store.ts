import { configureStore } from "@reduxjs/toolkit";
import favoritesState from "./favorites";

export const store = configureStore({
  reducer: {
    favorites: favoritesState,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {favorite: favoritesReducer}
export type AppDispatch = typeof store.dispatch;
