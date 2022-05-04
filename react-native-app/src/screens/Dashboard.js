import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import SearchGymsBtn from "../components/SearchGymsBtn";
const Dashboard = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <br></br>
      <ProfileDetailsBtn />
      <SearchGymsBtn />
      <LogOutBtn />
    </div>
  );
};

export default Dashboard;
