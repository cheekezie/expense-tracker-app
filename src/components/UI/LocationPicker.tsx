import { useNavigation, useRoute } from "@react-navigation/native";
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { getMapPreview } from "../../Helpers/util";
import { DisplayStyles } from "../../styles/Display.style";
import Button from "./Button";
import EmptyPickerState from "./EmptyPickerState";
import { LocationI, MapAddressDataI } from "../../types/places";
import { getLocationAddress } from "../../Services/api";

const LocationPicker = ({
  onLocationPicked,
  isError,
}: {
  onLocationPicked: (data: any) => void;
  isError?: boolean;
}) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationPermissonInformation, requestPermission] =
    useForegroundPermissions();

  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as { longitude: number; latitude: number };

  const mapPickedLocation = route.params && {
    longitude: params.longitude,
    latitude: params.latitude,
  };

  useEffect(() => {
    const handleAddress = async () => {
      if (mapPickedLocation) {
        const imageUri = getMapPreview(
          mapPickedLocation.latitude,
          mapPickedLocation.longitude
        );
        setImage(imageUri);
        try {
          const res: MapAddressDataI = await getLocationAddress(
            mapPickedLocation
          );
          const address = res.results[0].formatted_address;
          onLocationPicked({ ...mapPickedLocation, address });
        } catch (error) {
          // setLoading(false);
        }
      }
    };
    handleAddress();
  }, [route, params]);

  const verifyPermissions = async () => {
    if (
      locationPermissonInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissonInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission no granted",
        "You need to grant this app permission to use camera"
      );
      return false;
    }
    return true;
  };

  const locationHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    setLoading(true);
    const location = await getCurrentPositionAsync();
    const imageUri = getMapPreview(
      location.coords.latitude,
      location.coords.longitude
    );
    setImage(imageUri);
    const loc = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    const res: MapAddressDataI = await getLocationAddress(loc);
    const address = res.results[0].formatted_address;
    onLocationPicked({ ...loc, address });
    setLoading(false);
  };

  const mapHandler = async () => {
    navigation.navigate("MapScreen");
  };

  return (
    <View style={DisplayStyles.emptyPreviewContainer}>
      {!image && (
        <EmptyPickerState
          isError={isError}
          message={
            loading ? "Retrieving location..." : "No location picked yet"
          }
        />
      )}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            onPress={locationHandler}
            mode="flat"
            bordered={true}
            icon="location-sharp"
          >
            Locate User
          </Button>
        </View>
        <View style={styles.button}>
          <Button
            onPress={mapHandler}
            mode="flat"
            bordered={true}
            icon="map-sharp"
          >
            Pick on Map
          </Button>
        </View>
      </View>
      {image && <Image source={{ uri: image }} style={DisplayStyles.preview} />}
    </View>
  );
};

export default LocationPicker;
const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    width: "47%",
  },
});
