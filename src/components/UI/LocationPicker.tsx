import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { DisplayStyles } from "../../styles/Display.style";
import EmptyPickerState from "./EmptyPickerState";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useState } from "react";
import { getMapPreview } from "../../Helpers/util";

const LocationPicker = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [locationPermissonInformation, requestPermission] =
    useForegroundPermissions();

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
    setLoading(false);
  };

  const mapHandler = async () => {};

  return (
    <View style={DisplayStyles.emptyPreviewContainer}>
      {!image && (
        <EmptyPickerState
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
