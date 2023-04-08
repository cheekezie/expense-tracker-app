import { AuthResponseI } from "./auth";
import { ExpensesI } from "./expenses";

// Define a type for the slice state
export interface ExpenseState {
  expenses: ExpensesI[];
}
export interface AuthState {
  user: AuthResponseI | null;
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
export interface SetExpensesActionI {
  type: string;
  payload: ExpensesI[];
}
export interface EditExpensesActionI {
  type: string;
  payload: {
    id: string;
    data: Partial<ExpensesI>;
  };
}

export interface StoreTokenI {
  type: string;
  payload: string;
}
export interface StoreUserI {
  type: string;
  payload: AuthResponseI;
}
