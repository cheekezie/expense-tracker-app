import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
import { PlaceFormInitialI, PlacesI } from "../../types/places";
import ImagePicker from "../UI/ImagePicker";
import LocationPicker from "../UI/LocationPicker";

const PlaceForm = ({
  onSubmit,
  buttonLabel,
  formTitle,
  isLoading,
}: {
  onSubmit: any;
  buttonLabel: string;
  formTitle?: string;
  isLoading: boolean;
}) => {
  const [inputValue, setInputValue] = useState<PlaceFormInitialI>({
    title: {
      value: "",
      isValid: false,
    },
    address: {
      value: "",
      isValid: false,
    },
    location: {
      value: "",
      isValid: false,
    },
  });
  const [submited, setSubmission] = useState(false);

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
    const emailIsValid = inputValue.title.value.trim() !== "";
    const addressIsValid = inputValue.address.value.trim() !== "";
    const locationIsValid = inputValue.location.value.trim() !== "";

    if (!emailIsValid || !addressIsValid || !locationIsValid) {
      setInputValue((currentInputValue) => {
        return {
          title: {
            value: currentInputValue.title.value,
            isValid: emailIsValid,
          },
          address: {
            value: currentInputValue.address.value,
            isValid: addressIsValid,
          },
          location: {
            value: currentInputValue.location.value,
            isValid: locationIsValid,
          },
        };
      });
      return;
    }
    const dataToSubmit: Partial<PlacesI> = {
      title: inputValue.title.value,
      address: inputValue.address.value,
      // location: inputValue.location.value,
    };
    onSubmit(dataToSubmit);
  };

  return (
    <KeyboardAvoidingView
      style={DisplayStyles.flex}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={DisplayStyles.flex}
        showsVerticalScrollIndicator={false}
      >
        {/* <Text style={FormStyles.title}>{formTitle}</Text> */}
        <Input
          label="Title"
          bordered={true}
          coloreTheme="primary"
          errorMessage={
            !inputValue.title.isValid && submited ? "Provide a title" : ""
          }
          inputOptions={{
            inputMode: "text",
            placeholder: "",
            onChangeText: inputCHangeHandler.bind(this, "title"),
            value: inputValue.title.value,
          }}
        ></Input>
        {/* <Input
          label="Address"
          bordered={true}
          coloreTheme="primary"
          errorMessage={
            !inputValue.address.isValid && submited ? "Enter an address)" : ""
          }
          inputOptions={{
            inputMode: "text",
            multiline: true,
            onChangeText: inputCHangeHandler.bind(this, "address"),
            value: inputValue.address.value,
          }}
        ></Input> */}

        <ImagePicker />
        <LocationPicker />

        <View style={(DisplayStyles.flex, { marginBottom: 20 })}>
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PlaceForm;
