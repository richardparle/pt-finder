import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text, View } from "react-native";
import { styles } from "../styles/styles";

const ClientMatchBtn = () => {
  const navigation = useNavigation();
  const navToClientMatch = () => {
    navigation.replace("ClientMatch");
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={navToClientMatch} style={styles.button}>
        <Text style={styles.buttonText}>Find a PT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClientMatchBtn;
