import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import ClientMatchBtn from "../components/ClientMatchBtn";
import WeightTrackerBtn from "../components/WeightTrackerBtn";
import DashboardInputBox from "../components/DashboardInputBox";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { View, Text } from "react-native";
import { styles } from "./LoginScreen";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const readUser = JSON.stringify(user.email);
  const readUserEmail = readUser.replaceAll('"', "");

  useEffect(() => {
    const colRef = collection(db, "users");
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email === readUserEmail) {
            setUser({
              ...doc.data(),
              id: doc.id,
            });
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={styles.container}>
      <h1>{user.username}'s Dashboard</h1>
      <p>
        Here you can view your profile details, log weight for the day and find
        a personal trainer near you!
      </p>
      <ProfileDetailsBtn />
      <ClientMatchBtn />
      <LogOutBtn />
    </View>
  );
};

export default Dashboard;
