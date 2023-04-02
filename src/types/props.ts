import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import Meal from "../models/meals";

export interface GridTilePropsI {
  cardStyle?: StyleProp<ViewStyle>;
  title: string;
  color: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export interface MealdetailsPropI {
  duration: number;
  complexity: string;
  affordability: string;
  textStyle?: any;
  cardStyle?: StyleProp<ViewStyle>;
}

export interface MealsListngPropsI {
  displayedMeals: Meal[];
}
