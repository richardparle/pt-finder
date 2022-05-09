import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { StyleSheet, View, Text } from "react-native";
import {
  ArrowRight,
  At,
  EnvelopeCheckFill,
  TelephoneFill,
  HouseFill,
} from "react-bootstrap-icons";

const PersonalInfo = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <h1>Profile page</h1>
      <Text>Personal Info:</Text>
      <Text>
        <At />
        {user.username}
      </Text>
      <Text>
        <EnvelopeCheckFill />
        {user.email}
      </Text>
      <Text>
        <HouseFill />
        {user.postcode}
      </Text>
      <Text>
        <TelephoneFill />
        {user.phoneNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "right", alignItems: "center" },
});

export default PersonalInfo;
