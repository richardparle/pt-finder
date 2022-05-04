import { signOut } from "firebase/auth";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/LoginScreen";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const LogOutBtn = () => {
  const navigation = useNavigation();
  const logOut = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  return (
    <TouchableOpacity onPress={logOut} style={styles.button}>
      <Text style={styles.buttonText}>Log out</Text>
    </TouchableOpacity>
  );
};

export default LogOutBtn;
