import { createSlice } from "@reduxjs/toolkit";
import {
  AddExpensesActionI,
  AuthState,
  EditExpensesActionI,
  ExpenseState,
  RemoveExpensesActionI,
  SetExpensesActionI,
  StoreUserI,
} from "../../types/redux";
import { RootState } from "./store";
import { AuthResponseI } from "../../types/auth";

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
    },
    setUser: (state, action: StoreUserI) => {
      state.user = action.payload;
    },
  },
});

export const { clearAuth, setUser } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUserProfile = (state: RootState) => state.user;

export default authSlice.reducer;
