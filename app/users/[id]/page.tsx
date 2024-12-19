import { UserDetail } from "@/features/users/components/UserDetail";
import Layout from "@/components/Layout";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Container } from "@/components/Container";

export type UserDetailPageProps = {
  params: { id: string };
};

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  return (
    <Layout title="User Deatil">
      <Container>
        <Suspense fallback={<LoadingSpinner />}>
          <UserDetail userId={params.id} />
        </Suspense>
      </Container>
    </Layout>
  );
}
