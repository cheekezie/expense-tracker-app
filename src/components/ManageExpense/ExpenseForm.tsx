import { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { DisplayStyles } from "../../styles/Display.style";
import { FormStyles } from "../../styles/FormStyles";
import theme from "../../theme";
import { ExpensesI } from "../../types/expenses";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { dateValidator } from "../../Helpers/validators";

const ExpenseForm = ({
  onSubmit,
  buttonLabel,
  expense,
  isLoading,
}: {
  onSubmit: any;
  buttonLabel: string;
  expense: ExpensesI;
  isLoading: boolean;
}) => {
  const [inputValue, setInputValue] = useState({
    amount: {
      value: expense?.amount ? expense.amount : "",
      isValid: !!expense?.amount,
    },
    date: {
      value: expense?.date ? expense.date : "",
      isValid: !!expense?.date,
    },
    description: {
      value: expense?.description ? expense.description : "",
      isValid: !!expense?.description,
    },
  });
  const [submited, setSubmission] = useState(false);

  const inputCHangeHandler = (inputField: string, value: string) => {
    setInputValue((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputField]: { value, isValid: true },
      };
    });
  };
  const handleSubmit = () => {
    setSubmission(true);
    const amountIsValid =
      !isNaN(+inputValue.amount.value) && +inputValue.amount.value > 0;
    const dateIsvalid = dateValidator(inputValue.date.value.trim());
    const descIsValid = inputValue.description.value?.trim().length > 0;
    if (!amountIsValid || !dateIsvalid || !descIsValid) {
      setInputValue((currentInputValue) => {
        return {
          amount: {
            value: currentInputValue.amount.value,
            isValid: amountIsValid,
          },
          date: { value: currentInputValue.date.value, isValid: dateIsvalid },
          description: {
            value: currentInputValue.description.value,
            isValid: descIsValid,
          },
        };
      });
      return;
    }
    const dataToSubmit: Partial<ExpensesI> = {
      amount: inputValue.amount.value,
      date: inputValue.date.value,
      description: inputValue.description.value,
    };
    onSubmit(dataToSubmit);
  };

  return (
    <KeyboardAvoidingView
      style={DisplayStyles.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={FormStyles.title}>Your Expense</Text>
        <Input
          label="Amount"
          bordered={true}
          coloreTheme="primary"
          errorMessage={
            !inputValue.amount.isValid && submited
              ? "Enter a correct amount"
              : ""
          }
          inputOptions={{
            inputMode: "decimal",
            keyboardType: "decimal-pad",
            onChangeText: inputCHangeHandler.bind(this, "amount"),
            value: inputValue.amount.value,
          }}
        ></Input>
        <Input
          label="Date"
          bordered={true}
          coloreTheme="primary"
          mask={"[000] [00] [00]"}
          errorMessage={
            !inputValue.date.isValid && submited ? "Enter a correct date" : ""
          }
          inputOptions={{
            inputMode: "text",
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputCHangeHandler.bind(this, "date"),
            value: inputValue.date.value,
          }}
        ></Input>
        <Input
          label="Description"
          bordered={true}
          coloreTheme="primary"
          errorMessage={
            !inputValue.description.isValid && submited
              ? "Enter a valid description"
              : ""
          }
          inputOptions={{
            inputMode: "text",
            multiline: true,
            onChangeText: inputCHangeHandler.bind(this, "description"),
            value: inputValue.description.value,
          }}
        ></Input>
        <View style={DisplayStyles.flex}>
          <Button
            buttonStyle={FormStyles.button}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            {!isLoading && buttonLabel}
            {isLoading && (
              <ActivityIndicator size={"small"} color={theme.Colors.white} />
            )}
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ExpenseForm;
