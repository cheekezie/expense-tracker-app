import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import theme from "../../../theme";
import Button from "../Button";
import { ButtonStyles } from "../../../styles/Button.style";

const Indicator = ({
  type,
  message,
  title,
  onPress,
  buttonLabel,
}: {
  type: "error" | "loading";
  message?: string;
  title?: string;
  onPress?: () => void;
  buttonLabel?: string;
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={[styles.text, styles.title]}>{title}</Text>}
      {message && <Text style={[styles.text]}>{message}</Text>}
      {type === "loading" && (
        <ActivityIndicator size={"large"} color={theme.Colors.primary} />
      )}
      {onPress && (
        <Button buttonStyle={ButtonStyles.defaultButton} onPress={onPress}>
          {buttonLabel || "Okay"}
        </Button>
      )}
    </View>
  );
};

export default Indicator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: theme.Colors.black,
  },
});
