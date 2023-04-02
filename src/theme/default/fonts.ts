import { Platform } from "react-native";

export const fonts = {
  opneSans: "open-sans",
  medium: Platform.OS === "ios" ? "Ubuntu-Medium" : "Ubuntu-M",
  bold: Platform.OS === "ios" ? "Ubuntu-Bold" : "Ubuntu-B",
  light: Platform.OS === "ios" ? "Ubuntu-Light" : "Ubuntu-L",
};

export const fontSize = {
  title: 26,
  text: 16,
  subtitle: 16,
  placeholder: 16,
  button: 18,
  buttonSmall: 12,
  heading: 16,
  keyValue: 12,
  link: 14,
  error: 12,
  boldInput: 32,
};
