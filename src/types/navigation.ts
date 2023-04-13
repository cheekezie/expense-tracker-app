import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ExpensesI } from "./expenses";
import { LocationI } from "./places";

// Interface for rootstack. Undefined if no value is passed, pass objects if param values are required
export type RootStackParamList = {
  BottomTab: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  AuthenticationStack: any;
  AddPlaceScreen: any;
  MapScreen: any;
  ManageExpenseScreen: {
    data?: ExpensesI;
  };
  MealDetailsScreen: {
    mealId: string;
    mealTitle: string;
  };
};

export interface BottomTabsPropsI {
  navigation: NativeStackNavigationProp<RootStackParamList, "BottomTab">;
}
export interface GenericNavPropsI {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

export interface MealDetailScreenNavPropsI {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "MealDetailsScreen"
  >;
  route: RouteProp<RootStackParamList, "MealDetailsScreen">;
}
export interface ManageExpenseNavPropsI {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "ManageExpenseScreen"
  >;
  route: RouteProp<RootStackParamList, "ManageExpenseScreen">;
}
export interface AddPlaceNavPropsI {
  navigation: NativeStackNavigationProp<RootStackParamList, "AddPlaceScreen">;
  route: RouteProp<RootStackParamList, "AddPlaceScreen">;
}
export interface LocationPickerRoutePropsI {
  route: RouteProp<RootStackParamList, "AddPlaceScreen">;
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
