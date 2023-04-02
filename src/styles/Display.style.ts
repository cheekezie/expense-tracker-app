import { Platform, StyleSheet } from "react-native";

export const DisplayStyles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    // overflow: "hidden", // Note this hides shadow for IOS
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  radiusSm: {
    borderRadius: 8,
  },
  overFlowHidden: {
    overflow: "hidden",
  },
  clickFeedback: {
    opacity: 0.25,
  },
});
