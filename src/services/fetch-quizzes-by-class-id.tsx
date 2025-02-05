import { api } from './api-configuration';

export default async function FetchQuizzesByClassId(classId: number) {
  const { data } = await api.get(`quizzes/turma/${classId}`);
  return data;
}
