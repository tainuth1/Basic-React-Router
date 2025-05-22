import React from "react";
import "./userCard.css";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
export const users = [
  {
    id: 1,
    name: "Alice Johnson",
    username: "alicej",
    email: "alice@example.com",
    profile: "https://i.pravatar.cc/150?img=1",
    created_at: "2025-05-01T09:15:00Z",
  },
  {
    id: 2,
    name: "Brian Smith",
    username: "brians",
    email: "brian@example.com",
    profile: "https://i.pravatar.cc/150?img=2",
    created_at: "2025-05-02T11:20:00Z",
  },
  {
    id: 3,
    name: "Carla Gomez",
    username: "carlag",
    email: "carla@example.com",
    profile: "https://i.pravatar.cc/150?img=3",
    created_at: "2025-05-03T14:30:00Z",
  },
  {
    id: 4,
    name: "David Lee",
    username: "dlee",
    email: "david@example.com",
    profile: "https://i.pravatar.cc/150?img=4",
    created_at: "2025-05-04T17:45:00Z",
  },
  {
    id: 5,
    name: "Ella Brown",
    username: "ellab",
    email: "ella@example.com",
    profile: "https://i.pravatar.cc/150?img=5",
    created_at: "2025-05-05T08:10:00Z",
  },
  {
    id: 6,
    name: "Frank Harris",
    username: "frankh",
    email: "frank@example.com",
    profile: "https://i.pravatar.cc/150?img=6",
    created_at: "2025-05-06T12:00:00Z",
  },
  {
    id: 7,
    name: "Grace Kim",
    username: "gracek",
    email: "grace@example.com",
    profile: "https://i.pravatar.cc/150?img=7",
    created_at: "2025-05-07T10:25:00Z",
  },
  {
    id: 8,
    name: "Henry Adams",
    username: "henrya",
    email: "henry@example.com",
    profile: "https://i.pravatar.cc/150?img=8",
    created_at: "2025-05-08T15:40:00Z",
  },
  {
    id: 9,
    name: "Isla Wong",
    username: "islaw",
    email: "isla@example.com",
    profile: "https://i.pravatar.cc/150?img=9",
    created_at: "2025-05-09T13:05:00Z",
  },
  {
    id: 10,
    name: "Jack Miller",
    username: "jackm",
    email: "jack@example.com",
    profile: "https://i.pravatar.cc/150?img=10",
    created_at: "2025-05-10T19:30:00Z",
  },
];
const Users = () => {
  return (
    <div className="container">
      {users.map((user) => (
        <UserCard key={user.id} user={user}/> 
      ))}
    </div>
  );
};

export default Users;
