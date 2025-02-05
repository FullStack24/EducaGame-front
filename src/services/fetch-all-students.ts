import { api } from './api-configuration';

export default async function fetchAllUsers() {
  const { data } = await api.get(`turmas/alunos`);
  return data;
}
