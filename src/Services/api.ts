import axios from "axios";
import { userId } from "../Helpers/userdata";
import {
  AuthFormI,
  AuthResponseI,
  SignUpPayload,
  SinUpResponse,
} from "../types/auth";
import { ExpensesI } from "../types/expenses";

const firebaseKey = "AIzaSyB_GkFzLfYeck0YXgxWHmTlvUaJJPl2Xnw";
const baseUrl = "https://my-expense-tracker-react-default-rtdb.firebaseio.com/";
const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:`;

const getRequest = (url: string, method: "post" | "get" | "delete") => {
  axios[method];
};

export const signIn = (form: AuthFormI) => {
  const data: SignUpPayload = { ...form, returnSecureToken: true };
  const url = `${authUrl}signInWithPassword?key=${firebaseKey}`;
  return axios.post<AuthResponseI>(url, data);
};

export const createUser = (form: AuthFormI) => {
  const data: SignUpPayload = { ...form, returnSecureToken: true };
  const url = `${authUrl}signUp?key=${firebaseKey}`;
  return axios.post<SinUpResponse>(url, data);
};

export const createExpense = async (expenseData: Partial<ExpensesI>) => {
  const uid = await userId();
  const data = { ...expenseData, userId: uid };
  const response = await axios.post(baseUrl + "expenses.json", data);
  return response.data.name;
};
export const updateExpense = async (
  id: string,
  expenseData: Partial<ExpensesI>
) => {
  const uid = await userId();
  const data = { ...expenseData, userId: uid };
  return axios.put(baseUrl + `expenses/${id}.json`, data);
};
export const deleteExpense = (id: string) => {
  return axios.delete(baseUrl + `expenses${id}.json`);
};

export const getExpenses = async () => {
  const uid = await userId();
  const url = baseUrl + `expenses.json?orderBy="userId"&equalTo="${uid}"`;
  const response = await axios.get(url);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj: ExpensesI = {
      id: key,
      amount: response.data[key].amount,
      date: response.data[key].date,
      description: response.data[key].description,
      userId: response.data[key].userId,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
