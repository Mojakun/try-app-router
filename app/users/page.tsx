import { Container } from "@/components/Container";
import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { getUsers } from "@/features/users/api/getUsers";
import Users from "@/features/users/components/Users";
import { Suspense } from "react";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <Layout title="Users">
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <Users users={users} />
        </Suspense>
      </Container>
    </Layout>
  );
}
