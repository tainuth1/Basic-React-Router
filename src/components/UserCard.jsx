import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({user}) => {
  return (
    <div className="card">
      <img src={user.profile} alt="" />
      <h2>{user.name}</h2>
      <Link to={`/profile/${user.id}`} className="btn">
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;
