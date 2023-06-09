import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Entrypoint from "./src/Entrypoint";
import ExpenseContextProvider from "./src/store/context/expense-context";
import { store } from "./src/store/redux/store";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <ExpenseContextProvider>
          <Entrypoint />
        </ExpenseContextProvider>
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
