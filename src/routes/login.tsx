import { Login } from '@modules/Auth/pages/Login';
import { AuthLayout } from '@layouts/AuthLayout';

export default function Page() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
