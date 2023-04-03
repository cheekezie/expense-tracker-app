import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderIconButton from "../components/HeaderIconButton";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import EditExpenseScreen from "../screens/EditExpenseScreen";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import theme from "../theme";

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: theme.Colors.lightPrimary,
  },
  headerTintColor: "white",
  // headerShown: false,
  contentStyle: {
    backgroundColor: theme.Colors.primary,
  },
};
const ExpensesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="RecentExpensesScreen"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerLeft: ({ tintColor }) => (
            <HeaderIconButton
              icon={"close"}
              color={tintColor as string}
              closeNavigation={true}
            />
          ),
        }}
      >
        <Stack.Screen name="AddExpenseScreen" component={AddExpenseScreen} />
        <Stack.Screen name="EditExpenseScreen" component={EditExpenseScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ExpensesStack;
