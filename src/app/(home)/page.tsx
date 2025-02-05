'use client';

import PageTitle from '@/globalComponents/page-title';
import { Container, ContentContainer } from './page.styles';
import Exercises from './(components)/exercices';
import Welcome from './(components)/welcome';
import { useAuth } from '@/contexts/auth';
import Ranking from './(components)/ranking';
import UsersStatus from './(components)/users-status';
import Classes from './(components)/classes';
import LogoutButton from './(components)/logout-button';

export default function Home() {
  const user = useAuth().user;

  const isAdmin = user?.role === 'admin' || user?.role === 'professor';

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
