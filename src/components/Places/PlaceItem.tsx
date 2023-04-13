import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { PlacesI } from "../../types/places";
import { DisplayStyles } from "../../styles/Display.style";
import theme from "../../theme";

const PlaceItem = ({ title, imageUri, location }: PlacesI) => {
  const handlePress = () => {};
  return (
    <Pressable
      onPress={handlePress}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [pressed ? DisplayStyles.clickFeedback : null]}
    >
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: imageUri }} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{location.address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    ...DisplayStyles.shadow,
    ...DisplayStyles.radiusSm,
    backgroundColor: theme.Colors.white,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 12,
    flex: 1,
  },
  image: {
    flex: 1,
    minHeight: 100,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: theme.Colors.dark,
  },
  address: {
    fontSize: 14,
    color: theme.Colors.grey,
  },
});
