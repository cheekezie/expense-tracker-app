import { Text, View } from "react-native";
import { DisplayStyles } from "../../styles/Display.style";

const EmptyPickerState = ({
  message,
  isError,
}: {
  message: string;
  isError?: boolean;
}) => {
  return (
    <View
      style={[
        DisplayStyles.emptyPreviewState,
        isError && DisplayStyles.borderDanger,
      ]}
    >
      <Text style={DisplayStyles.emptyPreviewStateText}>{message}</Text>
    </View>
  );
};

export default EmptyPickerState;
