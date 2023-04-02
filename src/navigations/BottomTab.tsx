import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import ExpensesStack from "./ExpensesStack";
import theme from "../theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.Colors.white,
        tabBarInactiveTintColor: theme.Colors.inactive,
        tabBarStyle: { backgroundColor: theme.Colors.lightPrimary },
      }}
    >
      <Tab.Screen
        options={{ title: "Recent Expenses", headerShown: false }}
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
