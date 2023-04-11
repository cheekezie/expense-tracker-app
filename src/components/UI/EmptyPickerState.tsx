import { Text, View } from "react-native";
import { DisplayStyles } from "../../styles/Display.style";

const EmptyPickerState = ({ message }: { message: string }) => {
  return (
    <View style={DisplayStyles.emptyPreviewState}>
      <Text style={DisplayStyles.emptyPreviewStateText}>{message}</Text>
    </View>
  );
};

export default EmptyPickerState;
