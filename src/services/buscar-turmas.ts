import { api } from './api-configuration';

export default async function findClasses() {
  const { data } = await api.get('/turmas/me');
  return data;
}
