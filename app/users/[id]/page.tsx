import { UserDetail } from "@/features/users/components/UserDetail";
import Layout from "@/components/Layout";

export type UserDetailPageProps = {
  params: { id: string };
};

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  return (
    <Layout title="User Deatil">
      <UserDetail userId={params.id} />
    </Layout>
  );
}
