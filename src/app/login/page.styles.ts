import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${Colors.white};
  padding: 20px;
  width: 300px;
  border-radius: 10px;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 50%;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
`;
