import { useContext } from "react";
import ExpensesOutput from "../components/ExpenseList/ExpensesOutput";
import { useAppSelector } from "../store/hooks/hooks";

import { selectExpenses } from "../store/redux/expense";
import { ExpeenseContext } from "../store/context/expense-context";

const RecentExpensesScreen = () => {
  const expenses = useAppSelector(selectExpenses);
  const expensesCtx = useContext(ExpeenseContext);

  expenses.filter((expense) => {
    const expenseDate = Date.parse(expense.date); // in milliseconds
    const today = Date.now(); // in milliseconds
    const millisecondsInAWeek = 604800000;
    return expenseDate > today - millisecondsInAWeek;
  });

  const expenseSum = expenses
    .reduce((sum, expense) => {
      return sum + Number(expense.amount);
    }, 0)
    .toFixed(1);
  const periodStats = { title: "Last 7 days", value: expenseSum };
  return <ExpensesOutput expenses={expenses} periodStats={periodStats} />;
};

export default RecentExpensesScreen;
