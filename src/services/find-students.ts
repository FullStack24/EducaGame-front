import { api } from './api-configuration';

export default async function fetchStudents(classId: number) {
  const { data } = await api.get(`turmas/${classId}/alunos`);
  return data;
}
