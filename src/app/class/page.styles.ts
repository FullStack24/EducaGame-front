import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px 30px 0;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${Colors.black};
`;

export const VerTodosAlunos = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const PlusIcon = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  color: ${Colors.gray};
`;
export const AlunosInfo = styled.div`
  padding: 10px 15px;
  font-size: 22px;
  width: 100%;
  color: ${Colors.gray};
  margin: 0px 50px 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.white};
  border-radius: 8px;
`;
export const PointNumber = styled.p`
  font-size: 14px;
  line-height: 12px;
`;
export const PointText = styled.p`
  font-size: 12px;
  line-height: 12px;
`;
export const GoldIcon = styled.img`
  width: 30px;
`;
export const Points = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;
export const PointsText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const ClassId = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  font-weight: 700;
  font-size: 20px;
  width: 60px;
  height: 60px;
  font-size: 30px;
  border-radius: 100%;
  background-color: ${Colors.blue};
`;
export const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex: 1;
`;
export const Right = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  flex: 1;
`;
export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
