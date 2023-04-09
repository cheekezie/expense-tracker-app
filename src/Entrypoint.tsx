import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import ErrorOverlay from "./components/UI/Indicator/ErrorOverlay";
import Loading from "./components/UI/Indicator/Loading";
import AuthenticationStack from "./navigations/AuthenticationStack";
import BottomTab from "./navigations/BottomTab";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { local_get } from "./store/local/asyncstore";
import {
  getUserProfile,
  isUserLoggedIn,
  setUser,
} from "./store/redux/auth.redux";
import theme from "./theme";
import { StoreName } from "./types/Enums/store.ENUMS";
import { getAppLoadingState, setAppLoading } from "./store/redux/app.redux";

const Entrypoint = () => {
  const isLoggedIn = useAppSelector(isUserLoggedIn);
  const [isAppLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const RootStack = createNativeStackNavigator();

  const dispatch = useAppDispatch();
  const handleError = () => {
    // setError();
  };

  useEffect(() => {
    // alternatively, move this a to a contect provider since it wraps the entire app content
    // with this approach, protected screens will be by rendering conditionally instead of
    // conditionally choosing initial route name
    const checkUser = async () => {
      try {
        const user = await local_get(StoreName.USER);
        if (user) {
          dispatch(setUser(user));
        }
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    checkUser();
  }, [dispatch]);

  if (isError) {
    return (
      <ErrorOverlay
        title={"Application error"}
        message="Something went wrong. Unable to start application"
        onPress={handleError}
        buttonLabel="Restart App"
      />
    );
  }

  if (isAppLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={isLoggedIn ? "BottomTab" : "AuthenticationStack"}
      >
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
