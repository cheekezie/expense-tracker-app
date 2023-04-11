import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpenseList from "./ExpenseList";
import { ExpenseOutputPropsI } from "../../types/props";
import theme from "../../theme";
import Button from "../UI/Button";
import { useNavigation } from "@react-navigation/native";
import Loading from "../UI/Indicator/Loading";
import ErrorOverlay from "../UI/Indicator/ErrorOverlay";
import { DisplayStyles } from "../../styles/Display.style";

const EmptyState = () => {
  const navigation = useNavigation<any>();

  const addExpense = () => {
    navigation.navigate("ManageExpenseScreen");
  };

  return (
    <View style={DisplayStyles.emptyContainer}>
      <Text style={DisplayStyles.emptyText}>
        You don't have any Expenses yet
      </Text>
      <Button
        buttonStyle={{ width: 150, alignSelf: "center" }}
        onPress={addExpense}
      >
        Add Expense
      </Button>
    </View>
  );
};

const ExpensesOutput = ({
  expenses,
  periodStats,
  isLoading,
  error,
  handlePress,
}: ExpenseOutputPropsI) => {
  if (isLoading) {
    return <Loading />;
  }
  return error?.isError ? (
    <ErrorOverlay
      title={error?.title}
      message={error?.message}
      onPress={handlePress}
      buttonLabel={error?.buttonLabel}
    />
  ) : (
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
});
