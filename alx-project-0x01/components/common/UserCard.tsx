import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="mt-2 text-gray-700">Email: {email}</p>
      <p className="text-gray-700">Phone: {phone}</p>
      <p className="text-gray-700">Website: {website}</p>
      <p className="text-gray-700 mt-2">
        Address: {address.street}, {address.suite}, {address.city}
      </p>
      <p className="text-gray-700 mt-2">Company: {company.name}</p>
      <p className="text-gray-500 text-sm">{company.catchPhrase}</p>
    </div>
  );
};

export default UserCard;
