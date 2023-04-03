import { FlatList, View } from "react-native";
import { ExpensesI } from "../../types/expenses";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }: { expenses: ExpensesI[] }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={expenses}
        renderItem={(itemData) => <ExpenseItem expense={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpenseList;
