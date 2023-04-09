import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import Entrypoint from "./src/Entrypoint";
import ExpenseContextProvider from "./src/store/context/expense-context";
import { store } from "./src/store/redux/store";
import { useAppDispatch } from "./src/store/hooks/hooks";
import { setAppLoading } from "./src/store/redux/app.redux";
import { local_get } from "./src/store/local/asyncstore";
import { StoreName } from "./src/types/Enums/store.ENUMS";
import { setUser } from "./src/store/redux/auth.redux";

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
