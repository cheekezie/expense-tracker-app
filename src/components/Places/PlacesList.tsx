import { FlatList, StyleSheet, Text, View } from "react-native";
import { PlacesI } from "../../types/places";
import PlaceItem from "./PlaceItem";
import { useNavigation } from "@react-navigation/native";
import Button from "../UI/Button";
import { DisplayStyles } from "../../styles/Display.style";

const PlacesList = ({ places }: { places: PlacesI[] }) => {
  const EmptyState = () => {
    const navigation = useNavigation<any>();

    const addPlace = () => {
      navigation.navigate("AddPlaceScreen");
    };

    return (
      <View style={DisplayStyles.emptyContainer}>
        <Text style={DisplayStyles.emptyText}>
          You don't have any places yet
        </Text>
        <Button
          buttonStyle={{ width: 150, alignSelf: "center" }}
          onPress={addPlace}
        >
          Add Place
        </Button>
      </View>
    );
  };

  if (places.length === 0) {
    return <EmptyState />;
  }
  return (
    <FlatList
      style={styles.list}
      showsVerticalScrollIndicator={false}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <PlaceItem {...itemData.item} />}
    />
  );
};
export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
});
