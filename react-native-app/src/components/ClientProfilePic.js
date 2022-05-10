import React, { Profiler, useContext, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { UserContext } from "../UserContext";

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: "stretch",
  },
});

const ClientProfilePic = () => {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Image style={styles.stretch} source={{ uri: user.profilePicURL }} />
    </View>
  );
};

export default ClientProfilePic;
