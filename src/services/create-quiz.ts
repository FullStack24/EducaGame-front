import { api } from './api-configuration';

interface createQuizProps {
  title: string;
  categoria: string;
  description: string;
  turmaId: number;
}

export async function createQuiz({
  title,
  categoria,
  description,
  turmaId,
}: createQuizProps) {
  const { data } = await api.post('/quizzes', {
    title,
    categoria,
    description,
    turmaId,
  });
  return data;
}
