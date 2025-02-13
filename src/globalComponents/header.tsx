'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  background-color: #010101;
`;
const Logo = styled.img`
  width: 30px;
`;
export default function Header() {
  return (
    <Container>
      <Logo src="/controle-logo.svg" />
    </Container>
  );
}
