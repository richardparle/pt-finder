import { signOut } from "firebase/auth";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/LoginScreen";
import { auth } from "../firebase";

const LogOutBtn = ({ user }) => {
  const logOut = async () => {
    await signOut(auth);
  };
  if (user)
    return (
      <TouchableOpacity onPress={logOut} style={styles.button}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    );
  return null;
};

export default LogOutBtn;
