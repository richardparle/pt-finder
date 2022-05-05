import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import SearchGymsBtn from "../components/SearchGymsBtn";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const Dashboard = ({ route }) => {
  let userEmail = route.params.userEmail;

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const colRef = collection(db, "users");
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email === userEmail) {
            setUserInfo({ ...doc.data(), id: doc.id });
          }
        });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(userInfo.username);

  return (
    <div>
      <h1>Welcome {userInfo.username}</h1>
      <br></br>
      <ProfileDetailsBtn />
      <SearchGymsBtn />
      <LogOutBtn />
    </div>
  );
};

export default Dashboard;
