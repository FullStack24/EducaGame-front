import { api } from './api-configuration';

export default async function getUserInfo() {
  const { data } = await api.get('/users/me');
  localStorage.setItem('user', JSON.stringify(data));
  return data;
}
