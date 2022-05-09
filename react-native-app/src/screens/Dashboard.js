import LogOutBtn from "../components/LogOutBtn";
import ProfileDetailsBtn from "../components/ProfileDetailsBtn";
import SearchGymsBtn from "../components/SearchGymsBtn";
import WeightTrackerBtn from "../components/WeightTrackerBtn";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <br></br>
      <ProfileDetailsBtn />
      <SearchGymsBtn />
      <WeightTrackerBtn />
      <LogOutBtn />
    </div>
  );
};

export default Dashboard;
