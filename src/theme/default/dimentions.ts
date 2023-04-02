import { Dimensions, Platform, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");
export const dimentions = {
  height: height,
  width: width,
  margin: 21,
  padding: 21,
  os: Platform.OS,
  statusBarHeight: StatusBar.currentHeight,
};
