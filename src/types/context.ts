import { ExpensesI } from "./expenses";

export type ExpenseContextType = {
  expenses: ExpensesI[];
  addExpense: (data: ExpensesI) => void;
  removeExpense: (id: string) => void;
  editExpense: (id: string, data: ExpensesI) => void;
};

export interface ContextReducerPayload {
  id?: string;
  data: ExpensesI;
}
