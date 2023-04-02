import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HeaderIconButton = (props: {
  onPress?: VoidFunction;
  icon: any;
  color: string;
}) => {
  const { onPress, color, icon } = props;
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default HeaderIconButton;
