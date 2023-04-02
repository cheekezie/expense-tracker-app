import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderIconButton = (props: {
  onPress?: VoidFunction;
  icon: any;
  color: string;
  closeNavigation?: boolean;
}) => {
  const { onPress, color, icon, closeNavigation } = props;
  const navigation = useNavigation();
  if (closeNavigation) {
    navigation.goBack();
  }

  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default HeaderIconButton;
