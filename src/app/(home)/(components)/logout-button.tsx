import { useAuth } from '@/contexts/auth';
import Button from '@/globalComponents/button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
export default function LogoutButton() {
  const auth = useAuth();
  return (
    <Wrapper>
      <Button label="Sair" onClick={() => auth.logout()} type="red" />
    </Wrapper>
  );
}
