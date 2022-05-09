import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import SearchGymsBtn from "../components/SearchGymsBtn";
import DashboardInputBox from "../components/DashboardInputBox";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { View, Text } from "react-native";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const readUser = JSON.stringify(user.email);
  const readUserEmail = readUser.replaceAll('"', "");
  console.log(readUserEmail);

  // const [userInfo, setUserInfo] = useState({});

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

  console.log(user);

  return (
    <View>
      <Text fontFamily="sans-serif" fontSize={20}>
        Welcome {user.username}
      </Text>
      <br></br>
      <ProfileDetailsBtn />
      <SearchGymsBtn />
      <DashboardInputBox />
      <LogOutBtn />
    </View>
  );
};

export default Dashboard;
