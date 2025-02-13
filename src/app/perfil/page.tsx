'use client';

import { useEffect, useState, useCallback } from 'react';
import { Container } from '../class/page.styles';
import {
  EditIcon,
  QuizAskQuantity,
  QuizButtonContainer,
  QuizContainer,
  QuizList,
  QuizListItem,
  QuizSectionTitle,
  QuizTitle,
} from '../class/components/quizzes';
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
} from '../class/page.styles';
import { useAuth } from '@/contexts/auth';
import getUserInfo from '@/services/get-user-info';
import { EditButton, Email, Names, Username } from './page.styles';
import EditUserModal from './edit-modal';
import Image from 'next/image';

interface UserInfoProps {
  name: string;
  email: string;
  quizzes: any[];
  turma: {
    id: string;
    name: string;
    alunos: any[];
  }[];
}
export default function ClassPage() {
  const [userInfo, setUserInfo] = useState<UserInfoProps>();
  const [showModal, setShowModal] = useState(false);
  console.log(userInfo);
  const user = useAuth().user;
  const isAdmin = user?.role === 'professor' || user?.role === 'admin';

  const handleGetUserInfo = useCallback(async () => {
    const response = await getUserInfo();
    if (response) {
      setUserInfo(response);
    }
  }, [showModal]);

  useEffect(() => {
    handleGetUserInfo();
  }, [handleGetUserInfo]);

  return (
    <Container>
      {!!userInfo && showModal && (
        <EditUserModal
          email={userInfo.email}
          name={userInfo?.name}
          onClose={() => setShowModal(false)}
        />
      )}
      <EditButton onClick={() => setShowModal(true)}>
        <Image alt="editar" src="/editar.svg" width={20} height={20} />
        <p>Editar</p>
      </EditButton>
      <Section>
        <Left>
          <ClassId>{userInfo?.name?.charAt(0)}</ClassId>
        </Left>
        <Right>
          <Names>
            <Username>{userInfo?.name}</Username>
            <Email>{userInfo?.email}</Email>
          </Names>
          <Points>
            <PointsText>
              <PointNumber>850</PointNumber>
              <PointText>Pontos</PointText>
            </PointsText>
            <GoldIcon src="./moeda.svg" alt="moedaIcon" />
          </Points>
        </Right>
      </Section>
      <QuizSectionTitle>
        {!!userInfo && userInfo?.turma?.length > 1
          ? 'Minhas turmas:'
          : 'Minha turma:'}
      </QuizSectionTitle>
      {userInfo?.turma?.slice(0, 3).map((turma) => (
        <AlunosInfo key={turma.id}>
          <p>{turma.name}</p>
          <p>{turma.alunos?.length}</p>
        </AlunosInfo>
      ))}
      <VerTodosAlunos>
        <PlusIcon>+</PlusIcon>
        <p>Ver todos</p>
      </VerTodosAlunos>
      <QuizContainer>
        <QuizSectionTitle>Minhas avaliações</QuizSectionTitle>
        <QuizList>
          {userInfo?.quizzes?.map((quiz, i) => (
            <QuizListItem key={i} rightAnswers={!isAdmin ? i + 4 : 10}>
              <QuizTitle>{quiz.title}</QuizTitle>
              <QuizAskQuantity>10 questões</QuizAskQuantity>
              {!isAdmin && <div>{i + 4}/10</div>}
              {isAdmin && (
                <QuizButtonContainer>
                  <EditIcon src="/editar.svg" width={20} height={20} />
                  Editar atividade
                </QuizButtonContainer>
              )}
              {!isAdmin && (
                <QuizButtonContainer>
                  <EditIcon src="/play.svg" />
                  Reiniciar
                </QuizButtonContainer>
              )}
            </QuizListItem>
          ))}
        </QuizList>
      </QuizContainer>{' '}
    </Container>
  );
}
