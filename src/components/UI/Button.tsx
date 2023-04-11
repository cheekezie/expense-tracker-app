import { ButtonProps, Pressable, Text, View } from "react-native";
import { CustomButtonPropsI } from "../../types/props";
import { ButtonStyles } from "../../styles/Button.style";
import { DisplayStyles } from "../../styles/Display.style";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
const Button = ({
  onPress,
  mode,
  children,
  bordered,
  icon,
  buttonStyle,
  disabled,
}: CustomButtonPropsI) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) =>
          (pressed || disabled) && DisplayStyles.clickFeedback
        }
      >
        <View
          style={[
            buttonStyle,
            ButtonStyles.buttonBase,
            mode === "flat" && ButtonStyles.flat,
            bordered && DisplayStyles.borderPrimary,
          ]}
        >
          <Text
            style={[
              ButtonStyles.buttonText,
              mode === "flat" && ButtonStyles.flattText,
            ]}
          >
            {children}
          </Text>
          {icon && (
            <Ionicons
              name={icon}
              size={24}
              style={{ marginLeft: 10 }}
              color={
                mode === "flat" ? theme.Colors.primary : theme.Colors.white
              }
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
