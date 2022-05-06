import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import SearchGymsBtn from "../components/SearchGymsBtn";
import DashboardInputBox from "../components/DashboardInputBox";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const readUser = JSON.stringify(user.email);
  const readUserEmail = readUser.replaceAll('"', "");
  console.log(readUserEmail);

  const [userInfo, setUserInfo] = useState({});

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
    <div>
      <h1>Welcome {user.username}</h1>
      <br></br>
      <ProfileDetailsBtn />
      <SearchGymsBtn />
      <DashboardInputBox />
      <LogOutBtn />
    </div>
  );
};

export default Dashboard;
