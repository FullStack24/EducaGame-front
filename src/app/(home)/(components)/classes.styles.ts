import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Class = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${Colors.gray};
  padding: 10px;
  cursor: pointer;
  width: 100%;
  justify-content: space-between;
  transition: all 0.3s;

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
  background-color: ${Colors.red};
  padding: 5px 10px;
  border-radius: 20px;
`;
