import { createSlice } from "@reduxjs/toolkit";
import { ApplicationState, SetAppStateI } from "../../types/redux";
import { RootState } from "./store";

// Define the initial state using that type
const initialState: ApplicationState = {
  isAppLoading: false,
  skip_upv_screens: false,
};

export const appStateSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLoading: (state, action: SetAppStateI) => {
      state.isAppLoading = action.payload;
    },
  },
});

export const { setAppLoading } = appStateSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getAppLoadingState = (state: RootState) =>
  state.appState.isAppLoading;
export const getAppState = (state: RootState) => state.appState;

export default appStateSlice.reducer;
