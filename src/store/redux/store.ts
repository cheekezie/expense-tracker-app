import { configureStore } from "@reduxjs/toolkit";
import expensesState from "./expense";
import userState from "./auth.redux";
import appState from "./app.redux";
import places from "./places.redux";

export const store = configureStore({
  reducer: {
    expenses: expensesState,
    user: userState,
    appState,
    placesState: places,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {favorite: favoritesReducer}
export type AppDispatch = typeof store.dispatch;
