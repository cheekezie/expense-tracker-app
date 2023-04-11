import { useLayoutEffect } from "react";
import PlacesList from "../../components/Places/PlacesList";
import { GenericNavPropsI } from "../../types/navigation";
import { PlacesI } from "../../types/places";
import HeaderIconButton from "../../components/HeaderIconButton";

const AllPlacesScreen = ({ navigation }: GenericNavPropsI) => {
  const places: PlacesI[] = [];

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
