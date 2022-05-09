import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import ClientMatchBtn from "../components/ClientMatchBtn";
import WeightTrackerBtn from "../components/WeightTrackerBtn";
import DashboardInputBox from "../components/DashboardInputBox";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
  const readUser = JSON.stringify(user.email);
  const readUserEmail = readUser.replaceAll('"', "");

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


  return (
    <div>
      <h1>{user.username}'s Dashboard</h1>
      <h3>Here you can view your profile details, log weight for the day and find a personal trainer near you!</h3>
      <br></br>
      <ProfileDetailsBtn />
      <WeightTrackerBtn />
      <ClientMatchBtn />
      <LogOutBtn />
    </div>
  );
};

export default Dashboard;
