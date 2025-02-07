import { useRouter } from 'next/navigation';
import Button from '@/globalComponents/button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export default function RankingButton() {
  const router = useRouter();
  return (
    <Wrapper>
      <Button label="Ver Ranking" onClick={() => router.push('/home/ranking')} type="gray" />
    </Wrapper>
  );
}
