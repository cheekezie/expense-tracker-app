import axios from "axios";
import { ExpensesI } from "../types/expenses";

const baseUrl = "https://my-expense-tracker-react-default-rtdb.firebaseio.com/";
const getRequest = (url: string, method: "post" | "get" | "delete") => {
  axios[method];
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
