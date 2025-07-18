import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm">
        {user.address.city}, {user.address.street}
      </p>
      <p className="text-sm">{user.company.name}</p>
    </div>
  );
};

export default UserCard;
