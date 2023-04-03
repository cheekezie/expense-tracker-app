import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DisplayStyles } from "../styles/Display.style";
import { View } from "react-native";

const HeaderIconButton = (props: {
  onPress?: VoidFunction;
  icon: any;
  color: string;
  closeNavigation?: boolean;
}) => {
  const { onPress, color, icon, closeNavigation } = props;
  // const navigation = useNavigation();
  // if (closeNavigation) {
  //   navigation.goBack();
  // }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed ? DisplayStyles.clickFeedback : null]}
    >
      <View style={styles.buttonContaine}>
        <Ionicons name={icon} size={24} color={color} />
      </View>
    </Pressable>
  );
};

export default HeaderIconButton;

const styles = StyleSheet.create({
  buttonContaine: {
    marginHorizontal: 8,
    marginVertical: 2,
  },
});
