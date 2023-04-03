import { createSlice } from "@reduxjs/toolkit";
import {
  AddExpensesActionI,
  EditExpensesActionI,
  ExpenseState,
  RemoveExpensesActionI,
} from "../../types/redux";
import { RootState } from "./store";

// Define the initial state using that type
const initialState: ExpenseState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addExpense: (state, action: AddExpensesActionI) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action: RemoveExpensesActionI) => {
      const objIndex = state.expenses.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.expenses.splice(objIndex, 1);
    },
    editExpense: (state, action: EditExpensesActionI) => {
      // const objIndex = state.expenses.findIndex(
      //   obj => obj.id === action.payload.id
      // );
      // state.expenses[objIndex] = action.payload
      state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.data,
          };
        }
      });
    },
  },
});

export const { addExpense, editExpense, removeExpense } = expensesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectExpenses = (state: RootState) => state.expenses.expenses;

export default expensesSlice.reducer;
