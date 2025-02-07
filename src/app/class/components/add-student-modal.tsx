'use client';
import { Form } from '@/app/login/page.styles';
import Button from '@/globalComponents/button';
import List from '@/globalComponents/list';
import Modal from '@/globalComponents/modal';
import fetchAllUsers from '@/services/fetch-all-students';
import { useEffect, useState } from 'react';
import StudentItem from './student-item';
import styled from 'styled-components';
import Colors from '@/globalComponents/colors';

const ModalTitle = styled.p`
  font-size: 17px;
  color: ${Colors.gray};
  border-bottom: 1px solid gray;
`;
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
        <ModalTitle>Adicionar aluno à Turma {classId}</ModalTitle>
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
