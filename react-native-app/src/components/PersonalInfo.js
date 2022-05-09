import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { StyleSheet, View, Text } from "react-native";
import {
  At,
  EnvelopeCheckFill,
  TelephoneFill,
  HouseFill,
} from "react-bootstrap-icons";

const PersonalInfo = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    // <View style={styles.container}>
    <View>
      <h1>Profile Details</h1>

      <Text style={styles.textTitle}>Personal Info:</Text>
      <Text style={styles.text}>
        <At />
        {" Username:       " + user.username}
      </Text>
      <Text style={styles.text}>
        <EnvelopeCheckFill />
        {" Email:          " + user.email}
      </Text>
      <Text style={styles.text}>
        <HouseFill />
        {" Postcode:       " + user.postcode}
      </Text>
      <Text style={styles.text}>
        <TelephoneFill />
        {" Phone:          " + user.phoneNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: { flex: 1, justifyContent: "left", alignItems: "center" },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    marginTop: 5,
  },
  // { color: "white", fontWeight: "700", fontSize: 16 },
  textTitle: {
    fontWeight: "700",
    fontSize: 16,
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#F0CF29",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
  buttonOutlineText: { color: "white", fontWeight: "700", fontSize: 16 },
});

export default PersonalInfo;
