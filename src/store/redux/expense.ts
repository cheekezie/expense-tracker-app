import { createSlice } from "@reduxjs/toolkit";
import {
  AddExpensesActionI,
  EditExpensesActionI,
  ExpenseState,
  RemoveExpensesActionI,
  SetExpensesActionI,
} from "../../types/redux";
import { RootState } from "./store";

// Define the initial state using that type
const initialState: ExpenseState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: AddExpensesActionI) => {
      state.expenses.unshift(action.payload);
    },
    setExpenses: (state, action: SetExpensesActionI) => {
      state.expenses = action.payload.reverse();
    },
    removeExpense: (state, action: RemoveExpensesActionI) => {
      const objIndex = state.expenses.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.expenses.splice(objIndex, 1);
    },
    editExpense: (state, action: EditExpensesActionI) => {
      const objIndex = state.expenses.findIndex(
        (obj) => obj.id === action.payload.id
      );
      state.expenses[objIndex] = {
        ...state.expenses[objIndex],
        ...action.payload.data,
      };
    },
  },
});

export const { addExpense, editExpense, setExpenses, removeExpense } =
  expensesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectExpenses = (state: RootState) => state.expenses.expenses;

export default expensesSlice.reducer;
