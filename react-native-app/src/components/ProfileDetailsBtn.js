import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/LoginScreen";

const ProfileDetailsBtn = () => {
  const navigation = useNavigation();
  const navToProfilePage = () => {
    navigation.replace("ClientProfile");
  };

  return (
    <TouchableOpacity onPress={navToProfilePage} style={styles.button}>
      <Text style={styles.buttonText}>View profile</Text>
    </TouchableOpacity>
  );
};

export default ProfileDetailsBtn;
