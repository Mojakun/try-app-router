import { User } from "../types/User";

export async function getUserById(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  const user = (await res.json()) as User;
  return user;
}
