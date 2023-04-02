import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./navigations/BottomTab";

const Entrypoint = () => {
  const RootStack = createNativeStackNavigator();
  const screenOptions = {
    headerStyle: {
      backgroundColor: "#251401",
    },
    headerTintColor: "white",
    contentStyle: {
      backgroundColor: "#372518",
    },
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen name="BottomTab" component={BottomTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Entrypoint;
