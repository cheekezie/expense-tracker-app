import { Text, View } from "react-native";
import { GenericNavPropsI } from "../../types/navigation";
import ProfileItem from "../../components/Profile/ProfileItem";
import Button from "../../components/UI/Button";
import { FormStyles } from "../../styles/FormStyles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { clearAuth, getUserProfile } from "../../store/redux/auth.redux";

const ProfileScreen = ({ navigation }: GenericNavPropsI) => {
  const profile = useAppSelector(getUserProfile);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(clearAuth());
    navigation.navigate("AuthenticationStack", {
      screen: "SignInScreen",
    });
  };

  return (
    <View style={FormStyles.container}>
      <Text style={FormStyles.title}>My Profile</Text>
      <ProfileItem title="Email" text={profile?.email} />
      <Button
        buttonStyle={[
          FormStyles.button,
          FormStyles.buttonFull,
          { marginTop: 20 },
        ]}
        onPress={handleLogout}
      >
        Logout
      </Button>
    </View>
  );
};

export default ProfileScreen;
