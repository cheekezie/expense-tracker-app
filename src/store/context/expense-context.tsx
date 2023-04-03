import { ReactNode, createContext, useReducer, useState } from "react";
import { ExpenseContextType } from "../../types/context";
import { ExpensesI } from "../../types/expenses";

export const ExpeenseContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: ({}) => {},
  removeExpense: (id: string) => {},
  editExpense: (id: string, {}) => {},
});

const expensesReducer = (
  state: any,
  action: { type: "ADD" | "EDIT" | "DELETE"; payload: any }
) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "EDIT":
      const objIndex = state.findIndex(
        (obj: any) => obj.id === action.payload.id
      );
      const updatableItem = state[objIndex];
      const updatedItem = { ...updatableItem, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[objIndex] = updatedItem;
      return updatedExpense;
    case "DELETE":
      return state.filter((expense: any) => expense.id !== action.payload);
    default:
      return state;
  }
};
const ExpenseContextProvider = ({ children }: { children: ReactNode }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, {});

  const addExpense = (data: ExpensesI) => {
    dispatch({ type: "ADD", payload: data });
  };
  const editExpense = (id: string, data: ExpensesI) => {
    dispatch({ type: "EDIT", payload: {} });
  };

  const removeExpense = (id: string) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value: ExpenseContextType = {
    expenses: expensesState,
    addExpense,
    removeExpense,
    editExpense,
  };

  return (
    <ExpeenseContext.Provider value={value}>
      {children}
    </ExpeenseContext.Provider>
  );
};

export default ExpenseContextProvider;
