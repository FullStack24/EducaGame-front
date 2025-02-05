'use client';
import Button from '@/globalComponents/button';
import fetchAllUsers from '@/services/fetch-all-students';
import fetchStudents from '@/services/find-students';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AddStudentModal, { Student } from './components/add-student-modal';
import List from '@/globalComponents/list';
import ClassListStudentItem from './components/class-list-student-item';
import { Container, ContentBox } from './page.styles';
import { SectionTitle } from '../(home)/page.styles';
import GoBackButton from '@/globalComponents/go-back-button';

export default function ClassPage() {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [studentsByClass, setStudentsByClass] = useState<Student[]>([]);
  const searchParams = Object.fromEntries(useSearchParams().entries());
  const classId = parseInt(searchParams.id);
  const className = searchParams.name;

  async function handleFetchStudents() {
    const response = await fetchStudents(classId);
    if (response) {
      setStudentsByClass(response);
    }
  }

  useEffect(() => {
    handleFetchStudents();
  }, [showAddStudentModal]);

  return (
    <Container>
      <SectionTitle>
        Gerenciar {className} <GoBackButton goTo="/" />
      </SectionTitle>
      <ContentBox>
        <Button
          label="Adicionar Alunos"
          type="red"
          onClick={() => setShowAddStudentModal(true)}
        />
        <List>
          {studentsByClass?.map((student) => (
            <ClassListStudentItem student={student} />
          ))}
        </List>
      </ContentBox>
      {showAddStudentModal && (
        <AddStudentModal
          studentsInClass={studentsByClass}
          classId={classId}
          onClose={() => setShowAddStudentModal(false)}
          handleFetchStudents={handleFetchStudents}
        />
      )}
    </Container>
  );
}
