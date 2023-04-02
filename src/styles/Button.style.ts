import { StyleSheet } from "react-native";
import theme from "../theme";
import { colors } from "../theme/default/colors";

export const ButtonStyles = StyleSheet.create({
  white: {
    backgroundColor: theme.Colors.white,
  },
  secondary: {
    backgroundColor: theme.Colors.secondary,
  },
  primary: {
    backgroundColor: theme.Colors.primary,
    borderColor: colors.white,
  },
  danger: {
    backgroundColor: theme.Colors.red,
  },
  disabled: {
    backgroundColor: theme.Colors.inactive,
  },
  buttonSm: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    width: "100%",
  },
});
