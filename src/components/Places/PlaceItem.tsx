import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { PlacesI } from "../../types/places";
import { DisplayStyles } from "../../styles/Display.style";

const PlaceItem = ({ title, imageUri, address }: PlacesI) => {
  const handlePress = () => {};
  return (
    <Pressable
      onPress={handlePress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [pressed ? DisplayStyles.clickFeedback : null]}
    >
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
