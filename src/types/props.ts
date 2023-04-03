import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import { ExpensesI } from "./expenses";
import { ReactNode } from "react";

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
