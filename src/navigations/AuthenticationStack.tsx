import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "../theme";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

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

const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          title: "Welcome",
        }}
      />

      <Stack.Screen name="AddExpenseScreen" component={SignInScreen} />
      <Stack.Screen name="EditExpenseScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
