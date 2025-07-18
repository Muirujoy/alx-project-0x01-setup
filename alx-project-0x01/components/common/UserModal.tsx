import React, { useState } from "react";
import { UserModalProps, UserProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserProps>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData); // ✅ now calling onSubmit, not onAddUser
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-6 rounded shadow-md w-[400px]">
        <h2 className="text-lg font-bold mb-4">Add New User</h2>
        <input
          name="name"
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-2"
          placeholder="Name"
        />
        <input
          name="username"
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-2"
          placeholder="Username"
        />
        <input
          name="email"
          onChange={handleChange}
          className="w-full border px-3 py-2 mb-2"
          placeholder="Email"
        />
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
