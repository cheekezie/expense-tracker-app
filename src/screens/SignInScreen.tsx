import { useState } from "react";
import { Alert, View } from "react-native";
import { signIn } from "../Services/api";
import AuthForm from "../components/Auth/AuthForm";
import { useAppDispatch } from "../store/hooks/hooks";
import { setUser } from "../store/redux/auth.redux";
import { FormStyles } from "../styles/FormStyles";
import { AuthMode } from "../types/Enums/auth";
import { AuthFormI } from "../types/auth";
import { GenericNavPropsI } from "../types/navigation";
import { ErrorDataI } from "../types/props";

const SignInScreen = ({ navigation }: GenericNavPropsI) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<ErrorDataI>({
    isError: false,
  });

  const dispatch = useAppDispatch();
  const handleConfirm = async (form: AuthFormI) => {
    try {
      setLoading(true);
      const res = await signIn(form);
      dispatch(setUser(res.data));
      setLoading(false);
      navigation.navigate("BottomTab");
    } catch (error) {
      console.log("error:", error);

      setLoading(false);
      Alert.alert(
        "Authentication failed",
        "Could not login, check your entry and try again later"
      );
    }
  };

  return (
    <View style={FormStyles.container}>
      <AuthForm
        onSubmit={handleConfirm}
        formTitle="Welcome Back"
        buttonLabel="Sign In"
        mode={AuthMode.SIGIN}
        altButtonLabel="Create Account"
        isLoading={isLoading}
      />
    </View>
  );
};

export default SignInScreen;
