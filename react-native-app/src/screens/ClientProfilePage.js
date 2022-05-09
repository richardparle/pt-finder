import React from "react";
import PersonalInfo from "../components/PersonalInfo";
import ClientProfilePic from "../components/ClientProfilePic";
import ExerciseGoals from "../components/ExerciseGoals";

const ClientProfilePage = () => {
  return (
    <>
      <PersonalInfo />
      <ExerciseGoals />
      <ClientProfilePic />
    </>
  );
};

export default ClientProfilePage;
