'use client';

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
