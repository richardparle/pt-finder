import { Image } from "react-native";

const Header = () => {
  return (
    <Image
      style={{
        width: "100%",
        height: "190px",
        borderBottomWidth: "3px",
      }}
      source={require("../images/app-logo.png")}
    />
  );
};

export default Header;
