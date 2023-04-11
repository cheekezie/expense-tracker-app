import { Platform, StyleSheet } from "react-native";
import theme from "../theme";
import { colors } from "../theme/default/colors";

export const DisplayStyles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.07,
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
  flex: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: theme.Colors.primary,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
  },
  borderPrimary: {
    borderColor: theme.Colors.primary,
    borderWidth: 1,
  },
  preview: {
    width: "100%",
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    marginBottom: 20,
    marginTop: 10,
    flex: 1,
  },
  emptyPreviewContainer: {
    marginBottom: 20,
  },
  emptyPreviewState: {
    flex: 1,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.Colors.grey,
    padding: 8,
    height: 100,
    marginBottom: 10,
  },
  emptyPreviewStateText: {
    color: theme.Colors.dark,
  },
});
