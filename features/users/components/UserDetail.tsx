import { getUserById } from "../api/getUserById";

type Props = {
  userId: string;
};

export async function UserDetail({ userId }: Props) {
  const user = await getUserById(userId);
  return (
    <div>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}
