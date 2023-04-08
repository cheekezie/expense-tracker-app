import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./navigations/BottomTab";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import theme from "./theme";
import AuthenticationStack from "./navigations/AuthenticationStack";
import ProfileScreenStack from "./navigations/ProfileScreen";

const Entrypoint = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="AuthenticationStack"
          component={AuthenticationStack}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTab}
        />
        <RootStack.Screen
          options={{ headerShown: false }}
          name="ProfileScreenStack"
          component={ProfileScreenStack}
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
