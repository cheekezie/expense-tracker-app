import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { DisplayStyles } from "../../styles/Display.style";
import theme from "../../theme";
import { ExpensesI } from "../../types/expenses";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { FormStyles } from "../../styles/FormStyles";
import { emailValidator, passwordValidator } from "../../Helpers/validators";
import { AuthFormI, FormInitialI } from "../../types/auth";
import { useNavigation } from "@react-navigation/native";
import { TypographyStyles } from "../../styles/Typography";
import { AuthMode } from "../../types/Enums/auth";
import Lottie from "../UI/Lottie";

const AuthForm = ({
  onSubmit,
  buttonLabel,
  formTitle,
  altButtonLabel,
  isLoading,
  mode,
}: {
  onSubmit: any;
  buttonLabel: string;
  formTitle: string;
  mode: AuthMode;
  altButtonLabel: string;
  isLoading: boolean;
}) => {
  const isSignIn = mode === AuthMode.SIGIN;
  const [inputValue, setInputValue] = useState<FormInitialI>({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
    confirmPassword: {
      value: "",
      isValid: isSignIn ? true : false,
    },
  });
  const [submited, setSubmission] = useState(false);

  const navigation = useNavigation();

  const handleNavigation = () => {
    isSignIn
      ? navigation.navigate("SignUpScreen")
      : navigation.navigate("SignInScreen");
  };

  const inputCHangeHandler = (inputField: string, value: string) => {
    setInputValue((currentInputValues) => {
      return {
        ...currentInputValues,
        [inputField]: { value, isValid: true },
      };
    });
  };
  const handleSubmit = () => {
    setSubmission(true);
    const emailIsValid = emailValidator(inputValue.email.value);
    const passwordIsValid = passwordValidator(inputValue.password.value);
    const confirmPasswordIsValid = isSignIn
      ? true
      : inputValue.confirmPassword.value?.trim() ===
        inputValue.password.value?.trim();
    if (!emailIsValid || !passwordIsValid || !confirmPasswordIsValid) {
      setInputValue((currentInputValue) => {
        return {
          email: {
            value: currentInputValue.email.value,
            isValid: emailIsValid,
          },
          password: {
            value: currentInputValue.password.value,
            isValid: passwordIsValid,
          },
          confirmPassword: {
            value: currentInputValue.confirmPassword.value,
            isValid: confirmPasswordIsValid,
          },
        };
      });
      return;
    }
    const dataToSubmit: Partial<AuthFormI> = {
      email: inputValue.email.value,
      password: inputValue.password.value,
    };
    onSubmit(dataToSubmit);
  };

  return (
    <KeyboardAvoidingView
      style={DisplayStyles.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Lottie path="../../../assets/lottie/auth.json" />
        <Text style={FormStyles.title}>{formTitle}</Text>
        <Input
          label="Email"
          bordered={true}
          coloreTheme="primary"
          errorMessage={
            !inputValue.email.isValid && submited ? "Email is invalid" : ""
          }
          inputOptions={{
            inputMode: "email",
            placeholder: "emeka@gmail.com",
            keyboardType: "email-address",
            onChangeText: inputCHangeHandler.bind(this, "email"),
            value: inputValue.email.value,
          }}
        ></Input>
        <Input
          label="Password"
          bordered={true}
          coloreTheme="primary"
          secureText={true}
          errorMessage={
            !inputValue.password.isValid && submited
              ? "Enter a valid password (Min. 6 characters)"
              : ""
          }
          inputOptions={{
            inputMode: "text",
            placeholder: "XXXXXXX",
            onChangeText: inputCHangeHandler.bind(this, "password"),
            value: inputValue.password.value,
          }}
        ></Input>
        {!isSignIn && (
          <Input
            label="Confirm Password"
            bordered={true}
            coloreTheme="primary"
            secureText={true}
            errorMessage={
              !inputValue.confirmPassword.isValid && submited
                ? "Passwords do not match"
                : ""
            }
            inputOptions={{
              inputMode: "text",
              placeholder: "XXXXXXX",
              onChangeText: inputCHangeHandler.bind(this, "confirmPassword"),
              value: inputValue.confirmPassword.value,
            }}
          ></Input>
        )}
        <View style={(DisplayStyles.flex, { flexDirection: "column" })}>
          <View style={{ marginBottom: 10 }}>
            <Button
              buttonStyle={[FormStyles.button, FormStyles.buttonFull]}
              onPress={handleSubmit}
              disabled={isLoading}
            >
              {!isLoading && buttonLabel}
              {isLoading && (
                <ActivityIndicator size={"small"} color={theme.Colors.white} />
              )}
            </Button>
          </View>
          <Button
            buttonStyle={FormStyles.button}
            mode={"flat"}
            onPress={handleNavigation}
            disabled={isLoading}
          >
            {altButtonLabel}
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthForm;
