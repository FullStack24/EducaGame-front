import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Class = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.white};
  color: ${Colors.gray};
  font-size: 18px;
  align-items: center;
  padding: 5px 20px;
  border-radius: 10px;
  &:hover {
    opacity: 0.7;
    border-color: ${Colors.red};
    background-color: ${Colors.gray};
    color: ${Colors.white};
  }
`;

export const ClassName = styled.p``;

export const ProfessorName = styled.p``;

export const StudentsLength = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const AddNewButton = styled.p`
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: fit-content;
`;

export const ClassTitle = styled.h2`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  margin: 0 0 10px;
`;

export const ClassBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px 0 0;
`;

export const StudentsLenghtText = styled.p`
  font-size: 11px;
`;
