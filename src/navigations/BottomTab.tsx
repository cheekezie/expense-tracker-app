import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import AddExpense from "../screens/AddExpense";
import EditExpense from "../screens/EditExpense";
import HeaderIconButton from "../components/HeaderIconButton";

const Stack = createNativeStackNavigator();
const BottomTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecentExpensesScreen"
        component={RecentExpensesScreen}
      />
      <Stack.Screen name="AllExpensesScreen" component={AllExpensesScreen} />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerLeft: ({ tintColor }) => (
            <HeaderIconButton icon={"close"} color={tintColor as string} />
          ),
        }}
      >
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="AllExpensesScreen" component={EditExpense} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default BottomTab;
