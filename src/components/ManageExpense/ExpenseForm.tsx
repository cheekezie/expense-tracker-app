import { View } from "react-native";
import theme from "../../theme";
import Button from "../UI/Button";
import CustomDateTimePicker from "../UI/CustomDateTimePicker";
import Input from "../UI/Input";
import { useState } from "react";
import { ExpensesI } from "../../types/expenses";

const formatDate = (date: string) => {
  return date ? new Date(date).toLocaleDateString() : "";
};

const ExpenseForm = (props: {
  onSubmit: any;
  buttonLabel: string;
  expense: ExpensesI;
}) => {
  const expense = props.expense;
  const [amountValue, setAmount] = useState(expense?.amount.toString());
  const [dateValue, setDate] = useState(formatDate(expense?.date));
  const [descriptionValue, setDescription] = useState(expense?.description);

  const amountChanged = (value: string) => {
    setAmount(value);
  };

  const dateChanged = (value: string) => {
    setDate(value);
  };

  const descriptionChanged = (value: string) => {
    setDescription(value);
  };
  const handleSubmit = () => {
    props.onSubmit();
  };

  return (
    <View>
      <Input
        label="Amount"
        bordered={true}
        coloreTheme="primary"
        inputOptions={{
          inputMode: "decimal",
          keyboardType: "decimal-pad",
          onChangeText: amountChanged,
          value: amountValue,
        }}
      ></Input>
      <Input
        label="Date"
        bordered={true}
        coloreTheme="primary"
        mask={"[000] [00] [00]"}
        inputOptions={{
          inputMode: "text",
          placeholder: "DD/MM/YYYY",
          maxLength: 10,
          onChangeText: dateChanged,
          value: dateValue,
        }}
      ></Input>
      {/* <CustomDateTimePicker
        textColor={theme.Colors.primary}
        dateChanged={dateChanged}
        mode="date"
      /> */}
      <Input
        label="Description"
        bordered={true}
        coloreTheme="primary"
        inputOptions={{
          inputMode: "text",
          multiline: true,
          onChangeText: descriptionChanged,
          value: descriptionValue,
        }}
      ></Input>

      <Button
        buttonStyle={{ width: 150, alignSelf: "center" }}
        onPress={props.onSubmit}
      >
        {props.buttonLabel}
      </Button>
    </View>
  );
};

export default ExpenseForm;
