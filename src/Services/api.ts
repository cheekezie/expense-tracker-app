import axios from "axios";
import { ExpensesI } from "../types/expenses";
import {
  AuthFormI,
  AuthResponseI,
  SignUpPayload,
  SinUpResponse,
} from "../types/auth";
import { AuthMode } from "../types/Enums/auth";

const firebaseKey = "AIzaSyB_GkFzLfYeck0YXgxWHmTlvUaJJPl2Xnw";
const baseUrl = "https://my-expense-tracker-react-default-rtdb.firebaseio.com/";
const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:`;

const getRequest = (url: string, method: "post" | "get" | "delete") => {
  axios[method];
};

export const signIn = (form: AuthFormI) => {
  const data: SignUpPayload = { ...form, returnSecureToken: true };
  const url = `${authUrl}signInWithPassword?key=${firebaseKey}`;
  console.log(url);

  return axios.post<AuthResponseI>(url, data);
};

export const createUser = (form: AuthFormI) => {
  const data: SignUpPayload = { ...form, returnSecureToken: true };
  const url = `${authUrl}signUp?key=${firebaseKey}`;
  return axios.post<SinUpResponse>(url, data);
};

export const authenticateUser = (
  id: string,
  expenseData: Partial<ExpensesI>
) => {
  return axios.put(baseUrl + `expenses/${id}.json`, expenseData);
};

export const createExpense = async (expenseData: Partial<ExpensesI>) => {
  const response = await axios.post(baseUrl + "expenses.json", expenseData);
  return response.data.name;
};
export const updateExpense = (id: string, expenseData: Partial<ExpensesI>) => {
  return axios.put(baseUrl + `expenses/${id}.json`, expenseData);
};
export const deleteExpense = (id: string) => {
  return axios.delete(baseUrl + `expenses${id}.json`);
};

export const getExpenses = async () => {
  const response = await axios.get(baseUrl + "expenses.json");

  const expenses = [];
  for (const key in response.data) {
    const expenseObj: ExpensesI = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
