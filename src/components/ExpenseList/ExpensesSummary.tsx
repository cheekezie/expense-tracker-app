import { StyleSheet, Text, View } from "react-native";
import { ExpenseSummaryPropsI } from "../../types/props";
import theme from "../../theme";

const ExpensesSummary = ({ title, value }: ExpenseSummaryPropsI) => {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{title}</Text>
      <Text style={styles.sum}>${value}</Text>
    </View>
  );
};

export default ExpensesSummary;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.Colors.primary500,
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  period: {
    fontSize: 12,
    color: theme.Colors.primary,
  },
  sum: {
    fontSize: 16,
    color: theme.Colors.primary,
  },
});
