import React, { Profiler, useContext, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { UserContext } from "../UserContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});

const ClientProfilePic = () => {
  const { user } = useContext(UserContext);
  console.log("USER", user.profilePicURL);
  return (
    <View style={styles.container}>
      <h2>Profile Avatar</h2>
      <Image style={styles.stretch} source={{ uri: user.profilePicURL }} />
    </View>
  );
};

export default ClientProfilePic;
