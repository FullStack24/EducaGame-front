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
import Quizzes from './components/quizzes';
import { useAuth } from '@/contexts/auth';

export default function ClassPage() {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [studentsByClass, setStudentsByClass] = useState<Student[]>([]);
  const searchParams = Object.fromEntries(useSearchParams().entries());
  const classId = parseInt(searchParams.id);
  const className = searchParams.name;
  const user = useAuth().user;
  const isAdmin = user?.role === 'professor' || user?.role === 'admin';

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
        {isAdmin && (
          <Button
            label="Adicionar Alunos"
            type="red"
            onClick={() => setShowAddStudentModal(true)}
          />
        )}
        <SectionTitle>Participantes:</SectionTitle>
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
      <Quizzes isAdmin={isAdmin} classId={classId} />

      <ContentBox>
        <SectionTitle>Ranking</SectionTitle>
      </ContentBox>
    </Container>
  );
}
