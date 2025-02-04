import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ContentBox = styled.div`
  display: flex;
  border: 1px solid gray;
  width: 100%;
  max-width: 500px;
`;
