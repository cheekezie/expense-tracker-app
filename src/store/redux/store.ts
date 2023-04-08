import { configureStore } from "@reduxjs/toolkit";
import expensesState from "./expense";
import userState from "./auth.redux";

export const store = configureStore({
  reducer: {
    expenses: expensesState,
    user: userState,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {favorite: favoritesReducer}
export type AppDispatch = typeof store.dispatch;
