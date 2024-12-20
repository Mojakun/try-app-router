import { Container } from "@/components/Container";
import { getUserById } from "../api/getUserById";
import Link from "next/link";

type Props = {
  userId: string;
};

export async function UserDetail({ userId }: Props) {
  const user = await getUserById(userId);
  return (
    <Container>
      <div>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <div>
          <Link href={"/users"}>一覧へ戻る</Link>
        </div>
      </div>
    </Container>
  );
}
