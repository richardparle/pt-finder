import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import SearchGymsBtn from "../components/SearchGymsBtn";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const Dashboard = ({ route }) => {
  let userEmail = route.params.userEmail;
 
  let userInfo = [];

  const colRef = collection(db, "users");
  getDocs(colRef)
    .then((snapshot) => {
      

      snapshot.docs.forEach((doc) => {
        if (doc.data().email === userEmail) {
          userInfo.push({ ...doc.data(), id: doc.id });
        }
      });
    })
    .catch((err) => console.log(err));

    console.log(userInfo);
  return (
    <div>
      <h1>Welcome </h1>
      <br></br>
      <ProfileDetailsBtn />
      <SearchGymsBtn />
      <LogOutBtn />
    </div>
  );
};

export default Dashboard;
