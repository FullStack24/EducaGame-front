import { api } from './api-configuration';

export default async function fetchQuestionsByQuizId(quizId: number) {
  const { data } = await api.get(`/quizzes/${quizId}`);
  return data;
}
