import { ReactNode } from "react";
import {
  GestureResponderEvent,
  InputModeOptions,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInputFocusEventData,
  ViewStyle,
} from "react-native";
import { AutoCapitalizeOptions, InputAutoCompleteOptions } from "./Input";
import { ExpensesI } from "./expenses";

export interface CustomButtonPropsI {
  buttonStyle?: StyleProp<ViewStyle>;
  mode?: "flat";
  onPress?: (event: GestureResponderEvent) => void;
  children: ReactNode;
}

export interface MealdetailsPropI {
  duration: number;
  complexity: string;
  affordability: string;
  textStyle?: any;
  cardStyle?: StyleProp<ViewStyle>;
}

export interface ExpenseSummaryPropsI {
  title: string;
  value: string;
}
export interface ExpenseOutputPropsI {
  expenses: ExpensesI[];
  periodStats: ExpenseSummaryPropsI;
}
export interface InputPropsI {
  label?: string;
  mask?: string;
  inputOptions: InputOptionsI;
  inputStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  bordered?: boolean;
  coloreTheme?: "primary" | "grey" | "secondary" | "dark" | "black";
}

export interface InputOptionsI {
  placeholder?: string;
  value?: any;
  inputStyle?: StyleProp<ViewStyle>;
  inputMode?: InputModeOptions;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  numberOfLines?: number;
  maxLength?: number;
  minLength?: number;
  multiline?: boolean;
  autoCapitalize?: AutoCapitalizeOptions;
  autoComplete?: InputAutoCompleteOptions;
  onChangeText?: (value: any) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
