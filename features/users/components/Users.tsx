"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "../types/User";
import { getUsers } from "../api/getUsers";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Users({ users }: { users: User[] }) {
  const [filter, setFilter] = useState("");
  const [userList, setUserList] = useState<User[]>(users);
  const [isLoading, setIsLoading] = useState(false);

  const filteredUsers = userList.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const displayedUsers = filter ? filteredUsers : userList;

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const users = await getUsers({ cache: "no-store" });
      setUserList(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search users"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-md p-2 w-full mr-2 shadow-sm focus:ring focus:ring-blue-300"
        />
        <button
          onClick={fetchUsers}
          disabled={isLoading}
          className={`px-4 py-2 rounded-md shadow ${
            isLoading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Reloading..." : "Reload"}
        </button>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="overflow-auto" style={{ height: "400px" }}>
          <ul className="space-y-2">
            {displayedUsers.map((user) => (
              <li
                key={user.id}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow"
              >
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
          {filteredUsers.length === 0 && filter && (
            <p className="text-gray-500">No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}
