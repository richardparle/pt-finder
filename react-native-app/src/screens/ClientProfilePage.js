import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import ClientProfilePic from "../components/ClientProfilePic";
import ExerciseGoals from "../components/ExerciseGoals";
import WeightTrackerScreen from "./WeightTrackerScreen";

const ClientProfilePage = () => {
  return (
    <>
      <ClientProfilePic />
      <PersonalInfo />
      <ExerciseGoals />
      <WeightTrackerScreen />
    </>
  );
};

export default ClientProfilePage;
