import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpenseList/ExpensesOutput";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";

import {
  editExpense,
  selectExpenses,
  setExpenses,
} from "../store/redux/expense";
import { ExpeenseContext } from "../store/context/expense-context";
import { getExpenses } from "../Services/api";
import { ExpensesI } from "../types/expenses";
import Loading from "../components/UI/Indicator/Loading";
import { ErrorDataI } from "../types/props";
import { getUserProfile } from "../store/redux/auth.redux";

const RecentExpensesScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<ErrorDataI>({
    isError: false,
  });
  const expenses = useAppSelector(selectExpenses);
  const dispatch = useAppDispatch();
  // const expensesCtx = useContext(ExpeenseContext);
  // const expenses = useContext(ExpeenseContext).expenses;

  expenses.filter((expense) => {
    const expenseDate = Date.parse(expense.date); // in milliseconds
    const today = Date.now(); // in milliseconds
    const millisecondsInAWeek = 604800000;
    return expenseDate > today - millisecondsInAWeek;
  });

  const resetError = () => {
    setError({ isError: false });
  };

  const myExpenses = async () => {
    try {
      setLoading(true);
      const expenses = await getExpenses();
      dispatch(setExpenses(expenses));
      //expensesCtx.setExpenses(expenses)
      setError({ isError: false });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError({ isError: true, buttonLabel: "Close" });
    }
  };
  useEffect(() => {
    myExpenses();
  }, []);

  const expenseSum = expenses
    .reduce((sum, expense) => {
      return sum + Number(expense.amount);
    }, 0)
    .toFixed(1);
  const periodStats = { title: "Last 7 days", value: expenseSum };
  return (
    <ExpensesOutput
      expenses={expenses}
      periodStats={periodStats}
      isLoading={isLoading}
      error={isError}
      handlePress={myExpenses}
    />
  );
};

export default RecentExpensesScreen;
