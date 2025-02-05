import { api } from './api-configuration';

interface createClassProps {
  name: string;
  professorId: number;
}

export async function createClass({ name, professorId }: createClassProps) {
  return api.post('/turmas/create', { name, professorId });
}
