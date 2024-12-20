"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "../types/User";

type Props = {
  users: User[];
};

export default function Users({ users }: Props) {
  const [filter, setFilter] = useState(""); // フィルタ条件の管理

  // フィルタリング処理
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  // フィルタ状態に応じた表示リスト
  const displayedUsers = filter ? filteredUsers : users;

  return (
    <div>
      <input
        type="text"
        placeholder="Search users"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // 入力値を更新
        className="border rounded-md p-2 w-full mb-4 shadow-sm focus:ring focus:ring-blue-300"
      />

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
    </div>
  );
}
