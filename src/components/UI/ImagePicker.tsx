import { useState } from "react";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { Image, View, Platform, Alert, StyleSheet, Text } from "react-native";
import Button from "./Button";
import { DisplayStyles } from "../../styles/Display.style";
import EmptyPickerState from "./EmptyPickerState";

const ImagePicker = ({
  onImagePicked,
}: {
  onImagePicked: (data: string) => void;
}) => {
  const [image, setImage] = useState("");
  const [cameraPermissonInformation, requestPermission] =
    useCameraPermissions();

  const verifyCameraPermissions = async () => {
    if (cameraPermissonInformation?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissonInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission no granted",
        "You need to grant this app permission to use camera"
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const hasPermissions = await verifyCameraPermissions();
    if (!hasPermissions) {
      return;
    }
    let result = await launchCameraAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      onImagePicked(uri);
    }
  };
  return (
    <View style={DisplayStyles.emptyPreviewContainer}>
      {!image && <EmptyPickerState message="No Image picked yet" />}
      <Button
        onPress={pickImage}
        mode="flat"
        bordered={true}
        icon="camera-sharp"
      >
        Pick an image
      </Button>
      {image && <Image source={{ uri: image }} style={DisplayStyles.preview} />}
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({});
