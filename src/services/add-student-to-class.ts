import { api } from './api-configuration';

export default async function addStudentToClass(
  classId: number,
  studentId: number
) {
  const { data } = await api.post(`turmas/${classId}/add-aluno`, {
    alunoId: studentId,
  });
  return data;
}
