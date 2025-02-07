import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  align-items: flex-start;
  padding: 30px;
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

export const AddNewAsk = styled.p`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 5px;
`;

export const TextBox = styled.div`
  background-color: ${Colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${Colors.gray};
  width: 100%;
  border-radius: 10px;
  margin: 5px 0;
`;

export const Questao = styled.p`
  font-size: 22px;
`;

export const Texto = styled.p`
  font-size: 15px;
`;
export const Verdadeiro = styled.p`
  background-color: ${Colors.green};
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 15px;
  height: max-content;
`;
export const Falso = styled.p`
  height: max-content;
  padding: 5px 15px;
  font-size: 15px;
  background-color: ${Colors.red};
  border-radius: 10px;
`;

export const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 10px;
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RightAnswer = styled.p`
  font-size: 13px;
  text-align: center;
  white-space: pre-line;
`;
