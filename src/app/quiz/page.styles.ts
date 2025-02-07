import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 20px;
  gap: 30px;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${Colors.white};
`;
