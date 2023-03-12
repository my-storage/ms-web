import { PasswordRecover } from '@modules/Auth/pages/PasswordRecover';
import { AuthLayout } from '@layouts/AuthLayout';

export default function Page() {
  return (
    <AuthLayout>
      <PasswordRecover />
    </AuthLayout>
  );
}
