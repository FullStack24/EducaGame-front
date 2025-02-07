import styled from 'styled-components';
import { Student } from './add-student-modal';
import Colors from '@/globalComponents/colors';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${Colors.white};
  border-bottom: 1px solid ${Colors.gray};
  margin: 10px 0;
`;

interface StudentItemProps {
  student: Student;
}
export default function ClassListStudentItem({ student }: StudentItemProps) {
  return (
    <Item>
      <label>{student.name}</label>
      <label>{student.email}</label>
    </Item>
  );
}
