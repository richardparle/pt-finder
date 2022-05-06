import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const ClientProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const readUser = JSON.stringify(user.email);
  console.log(user);
  return (
    <>
      <h1>Profile page</h1>
      <h2>{user.username}</h2>
      <h2>{user.postcode}</h2>
    </>
  );
};

export default ClientProfilePage;
