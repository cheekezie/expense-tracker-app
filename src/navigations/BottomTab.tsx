import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import HeaderIconButton from "../components/HeaderIconButton";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import theme from "../theme";
import AccountScreenStack from "./AccountScreenStack";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: theme.Colors.white,
        tabBarInactiveTintColor: theme.Colors.inactive,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.Colors.lightPrimary,
        },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: theme.Colors.lightPrimary,
        },
        headerRight: ({ tintColor }) => (
          <HeaderIconButton
            icon={"add-circle-outline"}
            color={tintColor as string}
            onPress={() => {
              navigation.navigate("ManageExpenseScreen");
            }}
          />
        ),
        headerLeft: ({ tintColor }) => (
          <HeaderIconButton
            icon={"person"}
            color={tintColor as string}
            onPress={() => {
              // navigating to ProfileScreen will also work since its first screen in the nested stacks
              navigation.navigate("AccountScreenStack", {
                screen: "ProfileScreenStack",
                params: { screen: "ProfileScreen" },
              });
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Recent Expenses",
          title: "Recent Expenses",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <AntDesignIcons name="hourglass" color={color} size={26} />
          ),
        }}
        name="RecentExpensesScreen"
        component={RecentExpensesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "All Expenses",
          title: "All Expenses",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <AntDesignIcons name="calendar" color={color} size={26} />
          ),
        }}
        name="AllExpensesScreen"
        component={AllExpensesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          title: "My Profile",
          tabBarIcon: ({ color }) => (
            <AntDesignIcons name="user" color={color} size={26} />
          ),
        }}
        // name="ProfileScreen"
        // component={ProfileScreen}
        name="AccountScreenStack"
        component={AccountScreenStack}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
