import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import theme from "../theme";
import WelcomeScreen from "../screens/WelcomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HeaderIconButton from "../components/HeaderIconButton";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: theme.Colors.primary,
  },
  //headerShown: false,
  headerTintColor: theme.Colors.white,
  contentStyle: {
    //backgroundColor: theme.Colors.w,
  },
};

const AuthenticationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="SignInScreen"
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          title: "Welcome",
        }}
      />
      <Stack.Group
        screenOptions={{
          title: "",
          //   headerLeft: ({ tintColor }) => (
          //     <HeaderIconButton icon={"arrow-back"} color={tintColor as string} />
          //   ),
        }}
      >
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
