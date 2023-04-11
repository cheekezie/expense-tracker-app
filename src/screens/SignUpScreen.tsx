import { useState } from "react";
import { Alert, View } from "react-native";
import { createUser } from "../Services/api";
import AuthForm from "../components/Auth/AuthForm";
import { useAppDispatch } from "../store/hooks/hooks";
import { setUser } from "../store/redux/auth.redux";
import { FormStyles } from "../styles/FormStyles";
import { AuthMode } from "../types/Enums/auth";
import { AuthFormI } from "../types/auth";
import { GenericNavPropsI } from "../types/navigation";
import { ErrorDataI } from "../types/props";

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
