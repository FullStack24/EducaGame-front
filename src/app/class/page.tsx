'use client';
import fetchStudents from '@/services/find-students';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { Student } from './components/add-student-modal';
import { Container } from './page.styles';
import Quizzes from './components/quizzes';
import {
  Section,
  Left,
  Right,
  ClassId,
  Points,
  PointsText,
  PointNumber,
  PointText,
  GoldIcon,
  AlunosInfo,
  VerTodosAlunos,
  PlusIcon,
} from './page.styles';
import { useAuth } from '@/contexts/auth';

export default function ClassPage() {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [studentsByClass, setStudentsByClass] = useState<Student[]>([]);
  const searchParams = Object.fromEntries(useSearchParams().entries());
  const classId = parseInt(searchParams.id);
  const className = searchParams.name;
  const user = useAuth().user;
  const isAdmin = user?.role === 'professor' || user?.role === 'admin';

  const handleFetchStudents = useCallback(async () => {
    const response = await fetchStudents(classId);
    if (response) {
      setStudentsByClass(response);
    }
  }, [classId]);

  useEffect(() => {
    //remover...
    if (false) {
      setShowAddStudentModal(false);
    }
    handleFetchStudents();
  }, [showAddStudentModal, handleFetchStudents]);

  return (
    <Container>
      <Section>
        <Left>
          <ClassId>{classId}</ClassId>
        </Left>
        <Right>
          <p>{className}</p>
          <Points>
            <PointsText>
              <PointNumber>850</PointNumber>
              <PointText>Pontos</PointText>
            </PointsText>
            <GoldIcon src="./moeda.svg" alt="moedaIcon" />
          </Points>
        </Right>
      </Section>
      <AlunosInfo>
        <p>Alunos</p>
        <p>{studentsByClass?.length}</p>
      </AlunosInfo>
      <VerTodosAlunos>
        <PlusIcon>+</PlusIcon>
        <p>Ver todos</p>
      </VerTodosAlunos>
      {/* {showAddStudentModal && (
        <AddStudentModal
          studentsInClass={studentsByClass}
          classId={classId}
          onClose={() => setShowAddStudentModal(false)}
          handleFetchStudents={handleFetchStudents}
        />
      )} */}
      <Quizzes isAdmin={isAdmin} classId={classId} />
    </Container>
  );
}
