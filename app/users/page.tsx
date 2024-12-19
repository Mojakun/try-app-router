import { Container } from "@/components/Container";
import Layout from "@/components/Layout";
import Users from "@/features/users/components/Users";

export default function UsersPage() {
  return (
    <Container>
      <Layout title="Users">
        <Users />
      </Layout>
    </Container>
  );
}
