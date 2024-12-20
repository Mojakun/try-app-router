import { UserDetail } from "@/features/users/components/UserDetail";
import Layout from "@/components/Layout";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

export type UserDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const { id } = await params;
  return (
    <Layout title="User Detail">
      <Suspense fallback={<LoadingSpinner />}>
        <UserDetail userId={id} />
      </Suspense>
    </Layout>
  );
}
