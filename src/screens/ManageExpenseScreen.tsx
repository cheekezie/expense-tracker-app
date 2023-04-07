import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import HeaderIconButton from "../components/HeaderIconButton";
import Button from "../components/UI/Button";
import { useAppDispatch } from "../store/hooks/hooks";
import { addExpense, editExpense, removeExpense } from "../store/redux/expense";
import { ExpensesI } from "../types/expenses";
import { ManageExpenseNavPropsI } from "../types/navigation";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import Input from "../components/UI/Input";

const ManageExpenseScreen = ({ navigation, route }: ManageExpenseNavPropsI) => {
  const editMode = !!route.params?.data;
  const expenseToEdit = route.params?.data as ExpensesI;
  const id = expenseToEdit?.id as string;

  const dispatch = useAppDispatch();
  const closeaAvigation = () => {
    navigation.goBack();
  };

  const handleConfirm = (form: ExpensesI) => {
    if (editMode) {
      dispatch(editExpense({ id, data: form }));
    } else {
      form.id = Math.random().toString();
      dispatch(addExpense(form));
    }
    navigation.goBack();
  };
  const handleDelete = () => {
    dispatch(removeExpense({ id }));
    navigation.goBack();
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: editMode ? expenseToEdit?.description : "Add Expense",
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

  const titleChanged = (value: any) => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        expense={expenseToEdit}
        onSubmit={handleConfirm}
        buttonLabel={editMode ? "Save Changes" : "Add"}
      />
    </View>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
