import { ExpensesI } from "./expenses";

// Define a type for the slice state
export interface ExpenseState {
  expenses: ExpensesI[];
}

export interface RemoveExpensesActionI {
  type: string;
  payload: {
    id: string;
  };
}
export interface AddExpensesActionI {
  type: string;
  payload: ExpensesI;
}
