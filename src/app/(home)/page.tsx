'use client';

import PageTitle from '@/globalComponents/page-title';
import { Container, ContentContainer } from './page.styles';
import Exercises from './exercices';
import Welcome from './welcome';
import { useAuth } from '@/contexts/auth';
import Ranking from './ranking';
import UsersStatus from './users-status';
import Classes from './classes';
import LogoutButton from './logout-button';

export default function Home() {
  const user = useAuth().user;

  const isAdmin = user?.role === 'admin';

  return (
    <Container>
      <LogoutButton />
      <PageTitle label="Página Inicial" />
      <Welcome name={user?.name} />
      <ContentContainer>
        {isAdmin && <UsersStatus />}
        {isAdmin && <Classes />}
        <Exercises />
        <Ranking />
      </ContentContainer>
    </Container>
  );
}

// ### 3. Dashboard Principal
// [ ] - *Objetivo*: Resumo das atividades.
// [ ] - *Componentes*: Widgets com informações relevantes.
// [ ] - *Exibição*:
//   [ ] - *Admin*: Visão geral do sistema, estatísticas de usuários, turmas e quizzes.
//   [ ] - *Professor*: Desempenho das turmas, acesso rápido a quizzes e atividades.
//   [ ] - *Aluno*: Progresso em quizzes, rankings e atividades disponíveis.
