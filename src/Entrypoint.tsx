import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./navigations/BottomTab";
import theme from "./theme";

const Entrypoint = () => {
  const RootStack = createNativeStackNavigator();
  const screenOptions = {
    headerStyle: {
      backgroundColor: theme.Colors.lightPrimary,
    },
    headerTintColor: "white",
    contentStyle: {
      backgroundColor: theme.Colors.primary,
    },
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen
          // options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTab}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Entrypoint;
