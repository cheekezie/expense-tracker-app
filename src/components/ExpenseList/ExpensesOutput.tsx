import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseList from "./ExpenseList";
import { ExpenseOutputPropsI } from "../../types/props";
import theme from "../../theme";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";

const EmptyState = () => {
  const navigation = useNavigation<any>();

  const addExpense = () => {
    navigation.navigate("ManageExpenseScreen");
  };

  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>You don't have any Expenses yet</Text>
      <Button
        buttonStyle={{ width: 150, alignSelf: "center" }}
        onPress={addExpense}
      >
        Add Expense
      </Button>
    </View>
  );
};

const ExpensesOutput = ({ expenses, periodStats }: ExpenseOutputPropsI) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary {...periodStats} />
      {expenses.length > 0 ? (
        <ExpenseList expenses={expenses} />
      ) : (
        <EmptyState />
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: theme.Colors.primary,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: theme.Colors.primary,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
});
