import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Input from "./Input";
import theme from "../../theme";

interface props {
  value?: any;
  mode: "time" | "date";
  textColor: string;
  dateChanged: (date: any) => void;
}
const CustomDateTimePicker = ({
  mode,
  textColor,
  dateChanged,
  value,
}: props) => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <View style={styles.inputContainer}>
      <Input
        label="Date"
        bordered={true}
        coloreTheme="primary"
        inputOptions={{
          inputMode: "text",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          // value: { date },date.toLocaleString()
          onFocus(e) {
            setShow(true);
          },
        }}
      ></Input>

      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        style={styles.textInputBase}
        mode={mode}
        is24Hour={true}
        onChange={onChange}
        textColor={textColor}
      />
    </View>
  );
};

export default CustomDateTimePicker;
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },

  textInputBase: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    minHeight: 45,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.Colors.primary,
    backgroundColor: "none",
  },
});
