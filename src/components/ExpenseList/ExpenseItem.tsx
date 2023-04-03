import { StyleSheet, Text, View } from "react-native";
import { ExpensesI } from "../../types/expenses";
import theme from "../../theme";
import { DisplayStyles } from "../../styles/Display.style";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";

const ExpenseItem = ({ expense }: { expense: ExpensesI }) => {
  const navigation = useNavigation<any>();

  const selectExpenseItemHandler = () => {
    navigation.navigate("ManageExpenseScreen", {
      data: expense,
    });
  };
  return (
    <Pressable
      android_ripple={{ color: "#ccc" }}
      onPress={selectExpenseItemHandler}
      style={({ pressed }) => [pressed ? DisplayStyles.clickFeedback : null]}
    >
      <View style={styles.container}>
        <View style={styles.desciptionContainer}>
          <Text style={[styles.textBase, styles.description]}>
            {expense.title}
          </Text>
          <Text style={styles.textBase}>{expense.date}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${expense.amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
const styles = StyleSheet.create({
  container: {
    ...DisplayStyles.shadow,
    ...DisplayStyles.radiusSm,
    backgroundColor: theme.Colors.white,
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textBase: {
    //color: theme.Colors.white,
  },
  description: {
    marginBottom: 4,
    fontWeight: "bold",
  },
  desciptionContainer: {
    flex: 1,
    paddingRight: 10,
  },
  amountContainer: {
    ...DisplayStyles.radiusSm,
    backgroundColor: theme.Colors.primary,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
  amountText: {
    // color: theme.Colors.primary,
    color: theme.Colors.secondary,
  },
});
