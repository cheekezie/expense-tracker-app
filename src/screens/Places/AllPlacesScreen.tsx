import { useLayoutEffect } from "react";
import PlacesList from "../../components/Places/PlacesList";
import { GenericNavPropsI } from "../../types/navigation";
import { PlacesI } from "../../types/places";
import HeaderIconButton from "../../components/HeaderIconButton";
import { useAppSelector } from "../../store/hooks/hooks";
import { selectSavedPlaces } from "../../store/redux/places.redux";

const AllPlacesScreen = ({ navigation }: GenericNavPropsI) => {
  const places = useAppSelector(selectSavedPlaces);
  console.log(places);

  const handleNavigation = () => {
    navigation.navigate("AddPlaceScreen");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <HeaderIconButton
          icon={"add-circle-outline"}
          color={tintColor as string}
          onPress={handleNavigation}
        />
      ),
    });
  }, [navigation]);
  return <PlacesList places={places} />;
};

export default AllPlacesScreen;
