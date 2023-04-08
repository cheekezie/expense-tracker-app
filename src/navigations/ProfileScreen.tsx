import { createDrawerNavigator } from "@react-navigation/drawer";
import theme from "../theme";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const ProfileScreenStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.Colors.lightPrimary,
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          //backgroundColor: theme.Colors.white,
        },
        drawerActiveTintColor: theme.Colors.primary,
        drawerActiveBackgroundColor: theme.Colors.white,
        drawerContentStyle: {
          backgroundColor: theme.Colors.grey,
        },
      }}
    >
      <Drawer.Screen
        name="ProfileScreen"
        options={{
          title: "Account",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
      <Drawer.Screen
        options={{
          title: "Logout",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-out" size={size} color={color} />
          ),
        }}
        name="Logout"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default ProfileScreenStack;
