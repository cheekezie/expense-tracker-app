import ExpensesOutput from "../components/ExpenseList/ExpensesOutput";
import { useAppSelector } from "../store/hooks/hooks";
import { selectExpenses } from "../store/redux/expense";
import { ExpensesI } from "../types/expenses";

const AllExpensesScreen = () => {
  const expenses = useAppSelector(selectExpenses);

  const expenseSum = expenses
    .reduce((sum, expense) => {
      return sum + Number(expense.amount);
    }, 0)
    .toFixed(1);
  const periodStats = { title: "Total", value: expenseSum };
  return <ExpensesOutput expenses={expenses} periodStats={periodStats} />;
};

export default AllExpensesScreen;
