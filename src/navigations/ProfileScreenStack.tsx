import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderIconButton from "../components/HeaderIconButton";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import EditExpenseScreen from "../screens/EditExpenseScreen";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import theme from "../theme";
import AddFavoritePlace from "../screens/Places/AddPlaceScreen";
import FavoritePlaces from "../screens/Places/FavoritePlaces";
import PlaceDetailsScreen from "../screens/Places/PlaceDetailsScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import AddProfileImageScreen from "../screens/Profile/AddProfileImageScreen";

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: theme.Colors.lightPrimary,
  },
  headerTintColor: "white",
  // headerShown: false,
};

const ProfileScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerLeft: ({ tintColor }) => (
            <HeaderIconButton
              icon={"close"}
              color={tintColor as string}
              closeNavigation={true}
            />
          ),
        }}
      >
        <Stack.Screen
          name="AddProfileImageScreen"
          component={AddProfileImageScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileScreenStack;
