'use client';

import { Container, TopCards } from './page.styles';
import Welcome from './(components)/welcome';
import { useAuth } from '@/contexts/auth';
import UsersStatus from './(components)/users-status';
import Classes from './(components)/classes';
import Ranking from './(components)/ranking';

export default function Home() {
  const user = useAuth().user;

  const isAdmin = user?.role === 'admin' || user?.role === 'professor';

  return (
    <Container>
      <Welcome name={user?.name} />
      <TopCards>
        <UsersStatus />
        <Ranking />
      </TopCards>
      <Classes isAdmin={isAdmin} />
      {/* <LogoutButton /> */}
    </Container>
  );
}
