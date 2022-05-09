import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import ClientProfilePic from "../components/ClientProfilePic";
import ExerciseGoals from "../components/ExerciseGoals";

const ClientProfilePage = () => {
  return (
    <>
      <ClientProfilePic />
      <PersonalInfo />
      <ExerciseGoals />
    </>
  );
};

export default ClientProfilePage;
