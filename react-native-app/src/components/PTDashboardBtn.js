import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/LoginScreen";

const PTDashboardBtn = () => {
  const navigation = useNavigation();
  const navToPTPage = () => {
    navigation.replace("PTProfilePage");
  };

  return (
    <TouchableOpacity onPress={navToPTPage} style={styles.button}>
      <Text style={styles.buttonText}>PT Profile Page</Text>
    </TouchableOpacity>
  );
};

export default PTDashboardBtn;
