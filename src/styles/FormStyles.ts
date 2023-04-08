import { StyleSheet } from "react-native";
import theme from "../theme";

export const FormStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    color: theme.Colors.black,
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    color: theme.Colors.red,
    fontSize: 12,
  },
  button: {
    width: 150,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonFull: {
    width: "100%",
  },
});
