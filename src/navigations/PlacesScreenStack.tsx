import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderIconButton from "../components/HeaderIconButton";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import EditExpenseScreen from "../screens/EditExpenseScreen";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import theme from "../theme";
import AddFavoritePlace from "../screens/Places/AddFavoritePlace";
import FavoritePlaces from "../screens/Places/FavoritePlaces";
import PlaceDetailsScreen from "../screens/Places/PlaceDetailsScreen";

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
const PlacesScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="FavoritePlaces"
        component={FavoritePlaces}
        options={{
          title: "Favorite Places",
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
        <Stack.Screen name="AddFavoritePlace" component={AddFavoritePlace} />
        <Stack.Screen
          name="PlaceDetailsScreen"
          component={PlaceDetailsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PlacesScreenStack;
