import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./navigations/BottomTab";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import theme from "./theme";

const Entrypoint = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTab}
        />
        <RootStack.Screen
          name="ManageExpenseScreen"
          component={ManageExpenseScreen as any}
          options={{
            presentation: "modal",
            headerStyle: {
              backgroundColor: theme.Colors.lightPrimary,
            },
            headerTintColor: "white",
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Entrypoint;
