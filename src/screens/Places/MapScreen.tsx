import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { GenericNavPropsI } from "../../types/navigation";
import HeaderIconButton from "../../components/HeaderIconButton";

const MapScreen = ({ navigation }: GenericNavPropsI) => {
  const [selectedLocation, setSeletedLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectLocation = (event: MapPressEvent) => {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;
    setSeletedLocation({ latitude, longitude });
  };

  // usecallback to avoid unnecessary calling of the function
  const saveLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked",
        "you have to pick a location from the map"
      );
      return;
    }
    navigation.navigate("AddPlaceScreen", selectedLocation);
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <HeaderIconButton
          color={tintColor as string}
          text="Save"
          onPress={saveLocationHandler}
        />
      ),
    });
  }, [navigation, saveLocationHandler]);

  return (
    <MapView
      style={styles.container}
      initialRegion={region}
      onPress={selectLocation}
    >
      {selectedLocation && (
        <Marker title="Picked Location" coordinate={selectedLocation} />
      )}
    </MapView>
  );
};

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
