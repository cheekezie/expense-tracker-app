import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import HeaderIconButton from "../components/HeaderIconButton";
import Button from "../components/UI/Button";
import { useAppDispatch } from "../store/hooks/hooks";
import { addExpense, editExpense, removeExpense } from "../store/redux/expense";
import { ExpensesI } from "../types/expenses";
import { ManageExpenseNavPropsI } from "../types/navigation";

const ManageExpenseScreen = ({ navigation, route }: ManageExpenseNavPropsI) => {
  const editMode = !!route.params?.data;
  const expenseToEdit = route.params?.data;

  const dispatch = useAppDispatch();
  const closeaAvigation = () => {
    navigation.goBack();
  };

  const handleConfirm = () => {
    if (editMode) {
      dispatch(editExpense({ id: expenseToEdit?.id as string, data: {} }));
    } else {
      const expense: ExpensesI = {
        id: Math.random().toString(),
        title: "Purchased new shoe",
        amount: 99.8,
        date: Date.now().toString(),
      };
      dispatch(addExpense(expense));
    }
    navigation.goBack();
  };
  const handleDelete = () => {
    dispatch(removeExpense({ id: expenseToEdit?.id as string }));
    navigation.goBack();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: editMode ? expenseToEdit?.title : "Add Expense",
      headerLeft: ({ tintColor }) => (
        <HeaderIconButton
          icon={"close"}
          color={tintColor as string}
          onPress={closeaAvigation}
        />
      ),
    });
    if (editMode) {
      navigation.setOptions({
        headerRight: ({ tintColor }) => (
          <HeaderIconButton
            icon={"trash"}
            color={tintColor as string}
            onPress={handleDelete}
          />
        ),
      });
    }
  }, [navigation, route.params]);
  return (
    <View style={styles.container}>
      <Button
        buttonStyle={{ width: 150, alignSelf: "center" }}
        onPress={handleConfirm}
      >
        {editMode ? "Save Changes" : "Add"}{" "}
      </Button>
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
