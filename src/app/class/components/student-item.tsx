import styled from 'styled-components';
import { Student } from './add-student-modal';
import Button from '@/globalComponents/button';
import addStudentToClass from '@/services/add-student-to-class';
import Colors from '@/globalComponents/colors';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  color: ${Colors.black};
  border-bottom: 1px solid ${Colors.gray};
  margin: 10px 0;
`;

interface StudentItemProps {
  student: Student;
  classId: number;
  handleFetchStudents: () => void;
}
export default function StudentItem({
  handleFetchStudents,
  student,
  classId,
}: StudentItemProps) {
  async function handleAddStudent(studentId: number) {
    await addStudentToClass(classId, studentId);
    handleFetchStudents();
  }
  return (
    <Item>
      <label>{student.name}</label>
      <label>{student.email}</label>
      <Button
        label="+"
        type="green"
        onClick={() => handleAddStudent(student?.id)}
      />
    </Item>
  );
}
