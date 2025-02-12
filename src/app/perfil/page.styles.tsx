import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Email = styled.p`
  font-size: 9px;
`;

export const Username = styled.p`
  font-size: 16px;
  line-height: 10px;
`;
export const Names = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const EditButton = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${Colors.blackOpacity};
  border-radius: 7px;
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.black};
  }
`;
