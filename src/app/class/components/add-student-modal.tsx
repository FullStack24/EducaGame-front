import { Form } from '@/app/login/page.styles';
import Button from '@/globalComponents/button';
import List from '@/globalComponents/list';
import Modal from '@/globalComponents/modal';
import fetchAllUsers from '@/services/fetch-all-students';
import { useEffect, useState } from 'react';
import StudentItem from './student-item';
import { SectionTitle } from '../../(home)/page.styles';

interface CreateClassModalProps {
  onClose: () => void;
  classId: number;
  studentsInClass: Student[];
  handleFetchStudents: () => void;
}

export interface Student {
  name: string;
  id: number;
  email: string;
}

export default function AddStudentModal({
  classId,
  onClose,
  studentsInClass,
  handleFetchStudents,
}: CreateClassModalProps) {
  const [allStudents, setAllStudents] = useState<Student[]>([]);

  async function listAllStudents() {
    console.log('chamou');
    const users = await fetchAllUsers();
    if (!!users && users.length > 0) {
      setAllStudents(users);
    }
  }

  const filtered = allStudents.filter(
    (student) => !studentsInClass.some((s) => s.id === student.id)
  );

  useEffect(() => {
    listAllStudents();
  }, []);

  return (
    <Modal onClose={onClose}>
      <Form>
        <SectionTitle>Adicionar aluno à Turma {classId}</SectionTitle>
        <List>
          {filtered?.map((aluno) => (
            <StudentItem
              key={aluno.id}
              handleFetchStudents={handleFetchStudents}
              classId={classId}
              student={aluno}
            />
          ))}
        </List>
        <Button label="Fechar" type="green" onClick={onClose} />
      </Form>
    </Modal>
  );
}
