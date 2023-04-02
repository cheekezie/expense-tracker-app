import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import ExpensesStack from "./ExpensesStack";
import theme from "../theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      activeColor={theme.Colors.white}
      inactiveColor={theme.Colors.inactive}
      barStyle={{ backgroundColor: theme.Colors.lightPrimary }}
    >
      <Tab.Screen
        options={{ title: "Recent Expenses" }}
        name="ExpensesStack"
        component={ExpensesStack}
      />
      <Tab.Screen
        options={{ title: "All Expenses" }}
        name="AllExpensesScreen"
        component={AllExpensesScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
