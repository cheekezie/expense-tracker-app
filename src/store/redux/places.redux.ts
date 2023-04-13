import { createSlice } from "@reduxjs/toolkit";
import {
  AddExpensesActionI,
  EditExpensesActionI,
  ExpenseState,
  PlacesState,
  RemoveExpensesActionI,
  SetExpensesActionI,
  StorePlaceI,
} from "../../types/redux";
import { RootState } from "./store";
import { PlacesI } from "../../types/places";

// Define the initial state using that type
const initialState: PlacesState = {
  places: [],
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    addPlace: (state, action: StorePlaceI) => {
      state.places.unshift(action.payload);
    },
    removePlace: (state, action: RemoveExpensesActionI) => {
      const objIndex = state.places.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.places.splice(objIndex, 1);
    },
    editPlace: (state, action: EditExpensesActionI) => {
      const objIndex = state.places.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.places[objIndex] = {
        ...state.places[objIndex],
        ...action.payload.data,
      };
    },
  },
});

export const { addPlace, editPlace, removePlace } = placesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSavedPlaces = (state: RootState) => state.placesState.places;

export default placesSlice.reducer;
