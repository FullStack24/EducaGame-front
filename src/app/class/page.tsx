'use client';
import fetchStudents from '@/services/find-students';
import { useRouter, useSearchParams } from 'next/navigation';
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
  const [studentsByClass, setStudentsByClass] = useState<Student[]>([]);
  const searchParams = Object.fromEntries(useSearchParams().entries());
  const classId = parseInt(searchParams.id);
  const className = searchParams.name;
  const user = useAuth().user;
  const isAdmin = user?.role === 'professor' || user?.role === 'admin';
  const router = useRouter();
  const handleFetchStudents = useCallback(async () => {
    const response = await fetchStudents(classId);
    if (response) {
      setStudentsByClass(response);
    }
  }, [classId]);

  function handleGoToAlunosPage() {
    router.push(`/alunos?classId=${classId}&className=${className}`);
  }

  useEffect(() => {
    handleFetchStudents();
  }, [handleFetchStudents]);

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
      <AlunosInfo onClick={handleGoToAlunosPage}>
        <p>Alunos</p>
        <p>{studentsByClass?.length}</p>
      </AlunosInfo>
      <VerTodosAlunos onClick={handleGoToAlunosPage}>
        <PlusIcon>+</PlusIcon>
        <p>Ver todos</p>
      </VerTodosAlunos>

      <Quizzes isAdmin={isAdmin} classId={classId} />
    </Container>
  );
}
