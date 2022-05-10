import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../screens/LoginScreen";

const ProfileDetailsBtn = () => {
  const navigation = useNavigation();
  const navToProfilePage = () => {
    navigation.replace("ClientProfile");
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={navToProfilePage}
        style={styles.button}
        color="#f194ff"
      >
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileDetailsBtn;
