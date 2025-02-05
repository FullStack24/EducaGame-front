import { apiNoAuth } from './api-configuration';

interface RegisterProps {
  name: string;
  email: string;
  password: string;
  role: 'professor' | 'aluno' | 'admin';
}
export default async function register({
  name,
  email,
  password,
  role,
}: RegisterProps) {
  if (role === 'admin' || role === 'professor') {
    return await apiNoAuth.post('/users/register-admin', {
      name,
      email,
      password,
      role,
    });
  } else {
    return await apiNoAuth.post('/users/create-aluno', {
      name,
      email,
      password,
      role,
    });
  }
}
