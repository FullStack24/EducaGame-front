import IClass from '@/app/(interfaces)/class.interface';
import { api } from './api-configuration';

export interface Aluno {
  id: number;
  nome: string;
  pontuacao: number;
}

export interface Turma {
  id: number;
  nome: string;
  pontosTotais: number;
}

export const fetchRankingAlunos = async (): Promise<Aluno[]> => {
  const resposta = await api.get('/alunos/top-alunos');
  return resposta.data;
};

export const fetchRankingTurmas = async (): Promise<Turma[]> => {
  const resposta = await api.get('/ranking-turmas');
  return resposta.data.map((turma: IClass) => ({
    id: turma.id,
    nome: turma.name,
    pontosTotais: turma.alunos.length * 10,
  }));
};
