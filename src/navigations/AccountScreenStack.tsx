import { createDrawerNavigator } from "@react-navigation/drawer";
import theme from "../theme";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import FavoritePlaces from "../screens/Places/FavoritePlaces";
import ProfileScreenStack from "./ProfileScreenStack";

const Drawer = createDrawerNavigator();

const AccountScreenStack = () => {
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
        name="ProfileScreenStack"
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
        component={ProfileScreenStack}
      />
      <Drawer.Screen
        options={{
          title: "Favorite Places",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" size={size} color={color} />
          ),
        }}
        name="FavoritePlaces"
        component={FavoritePlaces}
      />
    </Drawer.Navigator>
  );
};

export default AccountScreenStack;
