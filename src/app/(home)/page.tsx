'use client';

import { useRouter } from 'next/navigation';
import { Container, ContentContainer } from './page.styles';
import Exercises from './(components)/exercices';
import Welcome from './(components)/welcome';
import { useAuth } from '@/contexts/auth';
import UsersStatus from './(components)/users-status';
import Classes from './(components)/classes';
import LogoutButton from './(components)/logout-button';
import RankingButton from './(components)/ranking-button';

export default function Home() {
  const router = useRouter();
  const user = useAuth().user;
  const isAdmin = user?.role === 'admin' || user?.role === 'professor';

  return (
    <Container>
      <LogoutButton />
      <RankingButton />
      <Welcome name={user?.name} />
      <ContentContainer>
        <UsersStatus />
        <Classes isAdmin={isAdmin} />
      </ContentContainer>
    </Container>
  );
}
