'use client';
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Colors from './colors';

const routes = [
  {
    icon: '/voltar.svg',
  },
  {
    icon: '/home.svg',
    goTo: '/',
  },
  {
    icon: '/sair.svg',
    goTo: 'logout',
  },
];
const Icon = styled.img`
  width: 30px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  max-width: 400px;
  bottom: 0;
  height: 80px;
  background-color: ${Colors.black};
  border-top: 1px solid gray;
  position: fixed;
  padding: 30px 30px 45px;

  @media (min-width: 900px) {
    display: none;
  }
`;
export default function BottomBar() {
  const router = useRouter();
  const { logout } = useAuth();
  function handleGoTo(goTo: string | undefined) {
    if (!goTo) {
      router.back();
    }
    if (goTo === 'logout') {
      logout();
      return;
    }
    if (goTo) {
      router.push(goTo);
    }
  }
  return (
    <Container>
      {routes?.map((route, index) => (
        <Icon
          key={index}
          src={route.icon}
          onClick={() => handleGoTo(route.goTo)}
        />
      ))}
    </Container>
  );
}
