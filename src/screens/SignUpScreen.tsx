import { Alert, View } from "react-native";
import AuthForm from "../components/Auth/AuthForm";
import { FormStyles } from "../styles/FormStyles";
import { useState } from "react";
import { ErrorDataI } from "../types/props";
import { useAppDispatch } from "../store/hooks/hooks";
import { AuthFormI } from "../types/auth";
import ErrorOverlay from "../components/UI/Indicator/ErrorOverlay";
import { createUser } from "../Services/api";
import { AuthMode } from "../types/Enums/auth";
import { setUser } from "../store/redux/auth.redux";
import { GenericNavPropsI } from "../types/navigation";

const SignUpScreen = ({ navigation }: GenericNavPropsI) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState<ErrorDataI>({
    isError: false,
  });

  const dispatch = useAppDispatch();

  const handleConfirm = async (form: AuthFormI) => {
    try {
      setLoading(true);
      const res = await createUser(form);
      dispatch(setUser({ ...res.data, registered: false }));
      setLoading(false);
      navigation.navigate("BottomTab");
    } catch (error) {
      setLoading(false);
      Alert.alert(
        "Sign Up failed failed",
        "Could not create user, check your entry and try again later"
      );
    }
  };

  return (
    <View style={FormStyles.container}>
      <AuthForm
        onSubmit={handleConfirm}
        formTitle={"Create Account"}
        buttonLabel="Submit"
        altButtonLabel="Sign In"
        mode={AuthMode.SIGNUP}
        isLoading={isLoading}
      />
    </View>
  );
};

export default SignUpScreen;
