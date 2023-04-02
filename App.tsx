import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/redux/store";
import Entrypoint from "./src/Entrypoint";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <Entrypoint />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
