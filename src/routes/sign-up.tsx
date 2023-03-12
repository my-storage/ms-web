import { SignUp } from '@modules/Auth/pages/SignUp';
import { AuthLayout } from '@layouts/AuthLayout';

export default function Page() {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
}
