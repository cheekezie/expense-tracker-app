import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { DisplayStyles } from "../../styles/Display.style";
import theme from "../../theme";

const ProfileItem = ({
  title,
  text,
}: {
  title: string;
  text: string | undefined;
}) => {
  return (
    <View style={styles.profileCard}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ProfileItem;
const styles = StyleSheet.create({
  profileCard: {
    ...DisplayStyles.shadow,
    ...DisplayStyles.radiusSm,
    backgroundColor: theme.Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 8,
  },
  title: {
    color: theme.Colors.black,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: theme.Colors.dark,
  },
});
