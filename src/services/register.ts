import { apiNoAuth } from './api-configuration';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}
export default async function register({
  name,
  email,
  password,
  role,
}: RegisterProps) {
  return await apiNoAuth.post('/users/register-admin', {
    name,
    email,
    password,
    role,
  });
}
