import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderIconButton from "../components/HeaderIconButton";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import EditExpenseScreen from "../screens/EditExpenseScreen";
import RecentExpensesScreen from "../screens/RecentExpensesScreen";
import theme from "../theme";
import AddFavoritePlace from "../screens/Places/AddPlaceScreen";
import FavoritePlaces from "../screens/Places/FavoritePlaces";
import PlaceDetailsScreen from "../screens/Places/PlaceDetailsScreen";
import AddPlaceScreen from "../screens/Places/AddPlaceScreen";
import AllPlacesScreen from "../screens/Places/AllPlacesScreen";

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: theme.Colors.lightPrimary,
  },
  headerTintColor: "white",
  // headerShown: false,
  contentStyle: {
    // backgroundColor: theme.Colors.primary,
  },
};
const PlacesScreenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="AllPlacesScreen"
        component={AllPlacesScreen}
        options={{
          title: "Visited Places",
        }}
      />
      <Stack.Screen
        name="FavoritePlaces"
        component={FavoritePlaces}
        options={{
          title: "Favorite Places",
        }}
      />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          presentation: "modal",
          headerLeft: ({ tintColor }) => (
            <HeaderIconButton
              icon={"close"}
              color={tintColor as string}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      >
        <Stack.Screen name="AddPlaceScreen" component={AddPlaceScreen} />
        <Stack.Screen
          name="PlaceDetailsScreen"
          component={PlaceDetailsScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PlacesScreenStack;
