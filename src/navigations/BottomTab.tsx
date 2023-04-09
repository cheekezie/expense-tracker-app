import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AllExpensesScreen from "../screens/AllExpensesScreen";
import ExpensesStack from "./ExpensesStack";
import theme from "../theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import HeaderIconButton from "../components/HeaderIconButton";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        tabBarActiveTintColor: theme.Colors.white,
        tabBarInactiveTintColor: theme.Colors.inactive,
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
              navigation.navigate("ProfileScreen");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Recent Expenses",
          title: "Recent Expenses",
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
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
