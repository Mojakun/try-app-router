import { notFound } from "next/navigation";
import { User } from "../types/User";

export async function getUsers({
  cache = "no-store",
}: {
  cache?: "no-store" | "force-cache";
}): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache,
  });
  if (!res.ok) {
    notFound();
  }
  const users = (await res.json()) satisfies User[] as User[];
  return users;
}
