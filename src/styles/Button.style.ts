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
  defaultButton: {
    width: 150,
    alignSelf: "center",
  },
  buttonBase: {
    borderRadius: 4,
    padding: 8,
    minHeight: 45,
    justifyContent: "center",
    backgroundColor: theme.Colors.primary,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: theme.Colors.white,
    textAlign: "center",
  },
  flattText: {
    color: theme.Colors.primary,
    textAlign: "center",
  },
});
