import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "./Users";

const Profile = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setUser(users.find((u) => u.id == id));
  }, []);
  console.log(user);
  return (
    <div>
      <div className="card">
        <img src={user.profile} alt="" />
        <h2>{user.id}</h2>
        <h2>{user.name}</h2>
        <h2>{user.username}</h2>
        <h2>{user.email}</h2>
      </div>
    </div>
  );
};

export default Profile;
