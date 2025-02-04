import { apiNoAuth } from './api-configuration';

export default async function login(email: string, password: string) {
  const { data } = await apiNoAuth.post('/auth/login', { email, password });
  localStorage.setItem('token', data.access_token);
  return data;
}
