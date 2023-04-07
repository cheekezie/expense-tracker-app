import { useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpenseList/ExpensesOutput";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { selectExpenses, setExpenses } from "../store/redux/expense";
import { ExpensesI } from "../types/expenses";
import { ErrorDataI } from "../types/props";
import { getExpenses } from "../Services/api";

const AllExpensesScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState<ErrorDataI>({ isError: false });
  const expenses = useAppSelector(selectExpenses);
  const dispatch = useAppDispatch();

  const myExpenses = async () => {
    try {
      setLoading(true);
      const expenses = await getExpenses();
      dispatch(setExpenses(expenses));
      setError({ isError: false });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError({ isError: true, buttonLabel: "Reload" });
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
  const periodStats = { title: "Total", value: expenseSum };
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

export default AllExpensesScreen;
