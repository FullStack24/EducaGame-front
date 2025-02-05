import Colors from '@/globalComponents/colors';
import styled from 'styled-components';

interface QuizListItemProps {
  id: number;
  title: string;
  category: string;
}
const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid ${Colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  &:hover {
    background-color: ${Colors.gray};
  }
`;

export default function QuizListItem({
  title,
  id,
  category,
}: QuizListItemProps) {
  return (
    <ListItem>
      <p>Quiz nº {id}</p>
      <p>{title}</p>
      <p>{category}</p>
    </ListItem>
  );
}
