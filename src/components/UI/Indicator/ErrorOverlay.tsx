import Indicator from "./Indicator";

const ErrorOverlay = ({
  title,
  message,
  onPress,
  buttonLabel,
}: {
  title?: string;
  message?: string;
  onPress?: () => void;
  buttonLabel?: string;
}) => {
  return (
    <Indicator
      type="error"
      title={title || "An error occured"}
      message={message || "Oop! something went wrong"}
      onPress={onPress}
      buttonLabel={buttonLabel}
    />
  );
};

export default ErrorOverlay;
