import { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import HeaderIconButton from "../components/HeaderIconButton";
import Button from "../components/UI/Button";
import { useAppDispatch } from "../store/hooks/hooks";
import { addExpense, editExpense, removeExpense } from "../store/redux/expense";
import { ExpensesI } from "../types/expenses";
import { ManageExpenseNavPropsI } from "../types/navigation";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import Input from "../components/UI/Input";
import { createExpense, deleteExpense, updateExpense } from "../Services/api";
import { ErrorDataI } from "../types/props";
import ErrorOverlay from "../components/UI/Indicator/ErrorOverlay";
import { FormStyles } from "../styles/FormStyles";

const ManageExpenseScreen = ({ navigation, route }: ManageExpenseNavPropsI) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<ErrorDataI>({
    isError: false,
  });
  const editMode = !!route.params?.data;
  const expenseToEdit = route.params?.data as ExpensesI;
  const id = expenseToEdit?.id as string;

  const dispatch = useAppDispatch();
  const closeaAvigation = () => {
    navigation.goBack();
  };

  const resetError = () => {
    setError({ isError: false });
  };

  const handleConfirm = async (form: ExpensesI) => {
    try {
      setLoading(true);
      if (editMode) {
        await updateExpense(id, form);
        dispatch(editExpense({ id, data: form }));
      } else {
        const id = await createExpense(form);
        dispatch(addExpense({ ...form, id }));
      }
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      setError({
        isError: true,
        message: "Could not save data, try again later",
        buttonLabel: "Close",
      });
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteExpense(id);
      dispatch(removeExpense({ id }));
      navigation.goBack();
    } catch (error) {
      setLoading(false);
      setError({
        isError: true,
        message: "Could not delete data, try again later",
        buttonLabel: "Close",
      });
    }
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

  if (isError.isError && !isLoading) {
    return (
      <ErrorOverlay
        title={isError?.title}
        message={isError?.message}
        onPress={resetError}
        buttonLabel={isError?.buttonLabel}
      />
    );
  }
  return (
    <View style={FormStyles.container}>
      <ExpenseForm
        expense={expenseToEdit}
        onSubmit={handleConfirm}
        buttonLabel={editMode ? "Save Changes" : "Add"}
        isLoading={isLoading}
      />
    </View>
  );
};

export default ManageExpenseScreen;
