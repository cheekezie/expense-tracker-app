import { ReactNode, createContext, useReducer, useState } from "react";
import { ContextReducerPayload, ExpenseContextType } from "../../types/context";
import { ExpensesI } from "../../types/expenses";

export const ExpeenseContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: ({}) => {},
  removeExpense: (id: string) => {},
  editExpense: (id: string, {}) => {},
  setExpenses: (expenses: ExpensesI[]) => {},
});

const expensesReducer = (
  state: ExpensesI[],
  action: { type: "ADD" | "EDIT" | "DELETE" | "SET"; payload: any }
) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      return action.payload.reverse();
    case "EDIT":
      const objIndex = state.findIndex((obj) => obj.id === action.payload.id);
      const updatableItem = state[objIndex];
      const updatedItem = { ...updatableItem, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[objIndex] = updatedItem;
      return updatedExpense;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
};
const ExpenseContextProvider = ({ children }: { children: ReactNode }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, [
    {
      id: Math.random().toString(),
      title: "Purchased Luis vuittion shoe",
      amount: 99.8,
      date: Date.now().toString(),
    },
  ]);

  const addExpense = (data: ExpensesI) => {
    dispatch({ type: "ADD", payload: { data } });
  };

  const setExpenses = (data: ExpensesI[]) => {
    dispatch({ type: "SET", payload: data });
  };

  const editExpense = (id: string, data: ExpensesI) => {
    dispatch({ type: "EDIT", payload: { id, data } });
  };

  const removeExpense = (id: string) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const value: ExpenseContextType = {
    expenses: expensesState,
    addExpense, // uses short hand method to assign values becsue they have same name
    removeExpense,
    editExpense,
    setExpenses,
  };

  return (
    <ExpeenseContext.Provider value={value}>
      {children}
    </ExpeenseContext.Provider>
  );
};

export default ExpenseContextProvider;
