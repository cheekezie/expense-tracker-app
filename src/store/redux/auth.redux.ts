import { createSlice } from "@reduxjs/toolkit";
import { StoreName } from "../../types/Enums/store.enums";
import { AuthResponseI } from "../../types/auth";
import { AuthState, StoreUserI } from "../../types/redux";
import { local_remove, local_save } from "../local/asyncstore";
import { RootState } from "./store";

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

// Set local store data
const storeUser = async (data: AuthResponseI) => {
  await local_save(StoreName.USER, data);
};
const doLogout = async () => {
  await local_remove(StoreName.USER);
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuth: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      doLogout();
    },
    setUser: (state, action: StoreUserI) => {
      storeUser(action.payload);
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { clearAuth, setUser } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUserProfile = (state: RootState) => state.user.user;
export const isUserLoggedIn = (state: RootState) => state.user.isLoggedIn;

export default authSlice.reducer;
