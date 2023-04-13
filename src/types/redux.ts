import { AuthResponseI } from "./auth";
import { ExpensesI } from "./expenses";
import { PlacesI } from "./places";

// Define a type for the slice state
export interface ExpenseState {
  expenses: ExpensesI[];
}
export interface AuthState {
  user: AuthResponseI | null;
  isLoggedIn: boolean;
}
export interface ApplicationState {
  isAppLoading: boolean;
  skip_upv_screens: boolean;
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
export interface SetAppStateI {
  type: string;
  payload: boolean;
}

export interface PlacesState {
  places: PlacesI[];
}

export interface StorePlaceI {
  type: string;
  payload: PlacesI;
}
export interface EditPlacesActionI {
  type: string;
  payload: {
    id: string;
    data: Partial<PlacesI>;
  };
}
