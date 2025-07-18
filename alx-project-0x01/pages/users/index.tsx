import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

interface UsersPageProps {
  users: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserData[]>(users);

  const handleAddUser = (user: UserData) => {
    setUserList([...userList, user]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
            onClick={() => setIsModalOpen(true)}
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {userList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        {/* Only pass onSubmit, not onAddUser */}
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
