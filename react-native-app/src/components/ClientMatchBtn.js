import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/LoginScreen";

const ClientMatchBtn = () => {
  const navigation = useNavigation();
  const navToClientMatch = () => {
    navigation.replace("ClientMatch");
  };

  return (
    <TouchableOpacity onPress={navToClientMatch} style={styles.button}>
      <Text style={styles.buttonText}>Find a PT</Text>
    </TouchableOpacity>
  );
};

export default ClientMatchBtn;
