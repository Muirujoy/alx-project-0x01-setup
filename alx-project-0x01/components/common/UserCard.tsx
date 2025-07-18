import React from "react";
import { UserProps } from "@/interfaces"; // ✅ No angle brackets here

// Define the props for this component
interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-400">{user.phone}</p>
    </div>
  );
};

export default UserCard;
