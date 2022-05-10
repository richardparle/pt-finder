import { Image } from "react-native";

const Header = () => {
  return (
    <Image
      style={{
        width: "100%",
        height: 200,
        marginTop: 0,
        borderBottomWidth: "3px",
      }}
      source={require("../images/app-logo.png")}
    />
  );
};

export default Header;
