import { api } from './api-configuration';

export default async function CreateNewQuestion(info: any) {
  const { data } = await api.post('/quizzes/ask', {
    ...info,
    correta: info.correta === 'true' || info.correta === true,
  });
  return data;
}
