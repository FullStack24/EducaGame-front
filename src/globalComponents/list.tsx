import styled from 'styled-components';

const ListComponent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface ListProps {
  children: React.ReactNode;
}
export default function List({ children }: ListProps) {
  return <ListComponent>{children}</ListComponent>;
}
