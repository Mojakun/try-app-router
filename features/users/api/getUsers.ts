import { User } from "../types/User";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const users = (await res.json()) satisfies User[] as User[];
  return users;
}