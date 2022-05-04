import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../screens/LoginScreen";

const SearchGymsBtn = () => {
  const navigation = useNavigation();
  const navToSearchGyms = () => {
    navigation.replace("SearchGyms");
  };

  return (
    <TouchableOpacity onPress={navToSearchGyms} style={styles.button}>
      <Text style={styles.buttonText}>Search gyms page</Text>
    </TouchableOpacity>
  );
};

export default SearchGymsBtn;
