import { MainLayout } from '@layouts/MainLayout';
import { Dashboard } from '@modules/Dashboard/pages/Dashboard';

export default function Page() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}
