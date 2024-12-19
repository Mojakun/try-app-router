import { User } from "../types/User";
import { notFound } from "next/navigation";

export async function getUserById(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    notFound();
  }
  const user = (await res.json()) as User;
  return user;
}
