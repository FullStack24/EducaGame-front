import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 30px;
  padding-top: 20px;
  color: #fff;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 10px;
`;

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.red};
  width: 100%;
  padding: 5px;
  text-align: center;
`;

export const TopCards = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  justify-content: space-between;
`;

export const WelcomeText = styled.p`
  font-size: 22px;
  text-align: center;
  margin: 0 0 20px;
`;
