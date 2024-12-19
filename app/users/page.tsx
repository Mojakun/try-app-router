import { Container } from "@/components/Container";
import Layout from "@/components/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import Users from "@/features/users/components/Users";
import { Suspense } from "react";

export default function UsersPage() {
  return (
    <Layout title="Users">
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <Users />
        </Suspense>
      </Container>
    </Layout>
  );
}
