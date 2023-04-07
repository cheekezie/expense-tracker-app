import { ButtonProps, Pressable, Text, View } from "react-native";
import { CustomButtonPropsI } from "../../types/props";
import { ButtonStyles } from "../../styles/Button.style";
import { DisplayStyles } from "../../styles/Display.style";

const Button = ({
  onPress,
  mode,
  children,
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
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
