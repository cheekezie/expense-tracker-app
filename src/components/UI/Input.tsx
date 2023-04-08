import { Pressable, StyleSheet, Text, View } from "react-native";
import { InputPropsI } from "../../types/props";
import { TextInput } from "react-native";
import theme from "../../theme";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Input = ({
  label,
  secureText,
  errorMessage,
  inputOptions,
  inputStyle,
  labelStyle,
  bordered,
  coloreTheme,
}: InputPropsI) => {
  // to set default false value for multi line option if none is set
  inputOptions.multiline = inputOptions.multiline
    ? inputOptions.multiline
    : false;
  const [secure, setSecure] = useState(secureText);

  const handleSecureText = () => {
    setSecure(!secure);
  };

  const inputThemeStyle = {
    borderWidth: bordered ? 1 : 0,
    borderColor:
      coloreTheme === "primary"
        ? theme.Colors.primary
        : coloreTheme === "secondary"
        ? theme.Colors.secondary
        : coloreTheme === "dark"
        ? theme.Colors.dark
        : theme.Colors.grey,
    minHeight: inputOptions.multiline ? 100 : 45,
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={[styles.inputLabel, labelStyle]}>{label}</Text>}
      <View>
        <TextInput
          multiline
          style={[
            styles.textInputBase,
            inputThemeStyle,
            inputStyle,
            inputOptions.multiline && styles.alignTop,
            !!errorMessage && styles.errorBorder,
          ]}
          {...inputOptions}
          secureTextEntry={secure}
        />
        {secureText && (
          <Pressable onPress={handleSecureText}>
            <View style={styles.passwordToggle}>
              <Ionicons
                name={secure ? "eye-off" : "eye"}
                size={24}
                color={theme.Colors.primary}
              />
            </View>
          </Pressable>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 12,
    color: theme.Colors.dark,
    marginBottom: 5,
  },
  textInputBase: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    minHeight: 45,
    borderRadius: 6,
    verticalAlign: "middle",
    marginBottom: 5,
    // textTransform: "lowercase",
  },
  alignTop: {
    verticalAlign: "top",
  },
  errorText: {
    color: theme.Colors.red,
    fontSize: 12,
  },

  errorBorder: {
    borderColor: theme.Colors.red,
  },
  passwordToggle: {
    position: "absolute",
    bottom: 15,
    right: 10,
  },
});
