import { UserDetail } from "@/features/users/components/UserDetail";
import { getUserById } from "@/features/users/api/getUserById";
import { Container } from "@/components/Container";

export type UserDetailPageProps = {
  params: { id: string };
};

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  return (
    <Container>
      <h1>User Detail</h1>
      <UserDetail userId={params.id} />
    </Container>
  );
}
