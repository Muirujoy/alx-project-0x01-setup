import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, company }) => {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm">{email}</p>
      <p className="text-sm">
        {address.city}, {address.street}
      </p>
      <p className="text-sm">{company.name}</p>
    </div>
  );
};

export default UserCard;
