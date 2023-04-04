import { View } from "react-native";
import theme from "../../theme";
import Button from "../UI/Button";
import CustomDateTimePicker from "../UI/CustomDateTimePicker";
import Input from "../UI/Input";

const ExpenseForm = (props: { onSubmit: any; buttonLabel: string }) => {
  const titleChanged = (value: string) => {
    console.log(value);
  };
  const dateChanged = (value: string) => {
    console.log(value);
  };

  return (
    <View>
      <Input
        label="Amount"
        bordered={true}
        coloreTheme="primary"
        inputOptions={{ inputMode: "decimal", keyboardType: "decimal-pad" }}
      ></Input>
      <Input
        label="Date"
        bordered={true}
        coloreTheme="primary"
        mask={"[000] [00] [00]"}
        inputOptions={{
          inputMode: "text",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
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
          onChangeText: titleChanged,
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
