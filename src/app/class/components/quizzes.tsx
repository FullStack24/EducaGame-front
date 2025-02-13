import { useCallback, useEffect, useState } from 'react';
import FetchQuizzesByClassId from '@/services/fetch-quizzes-by-class-id';
import Button from '@/globalComponents/button';
import CreateQuizModal from './create-quiz-modal';
import styled from 'styled-components';
import Colors from '@/globalComponents/colors';
import { PlusIcon } from '../page.styles';
import { useRouter } from 'next/navigation';

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${Colors.gray};
  margin-bottom: 80px;
`;
export const QuizTitle = styled.h2`
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  line-height: 15px;
`;
export const QuizAskQuantity = styled.p`
  font-size: 13px;
`;

export const QuizButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid gray;
  margin: 10px 0;
  gap: 5px;
  background-collor: #000;
`;
export const EditIcon = styled.img`
  width: 15px;
`;
export const QuizList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
  margin-bottom: 20px;
`;
export const QuizListItem = styled.li<{ rightAnswers?: number }>`
  background-color: ${({ rightAnswers }) =>
    rightAnswers
      ? rightAnswers >= 5
        ? Colors.green
        : Colors.red
      : Colors.green};
  min-width: 155px;
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 130px;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const QuizSectionTitle = styled.h2`
  font-size: 15px;
  align-self: flex-start;
  color: ${Colors.gray};
`;
interface Quiz {
  id: number;
  title: string;
  categoria: string;
}
interface QuizzesProps {
  isAdmin: boolean;
  classId: number;
}
export default function Quizzes({ isAdmin, classId }: QuizzesProps) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [showCreateQuizModal, setShowCreateQuizModal] = useState(false);
  const router = useRouter();

  const getQuizzes = useCallback(async () => {
    const quizzes = await FetchQuizzesByClassId(classId);
    if (quizzes) {
      setQuizzes(quizzes);
    }
  }, [classId]);

  function handleGoToQuiz(id: number) {
    router.push(`/quiz?id=${id}`);
  }

  useEffect(() => {
    getQuizzes();
  }, [showCreateQuizModal, getQuizzes]);

  return (
    <QuizContainer>
      <QuizSectionTitle>Atividades disponíveis</QuizSectionTitle>
      <QuizList>
        {quizzes?.map((quiz) => (
          <QuizListItem onClick={() => handleGoToQuiz(quiz.id)} key={quiz.id}>
            <QuizTitle>{quiz.title}</QuizTitle>
            <QuizAskQuantity>{0} perguntas</QuizAskQuantity>
            {isAdmin && (
              <QuizButtonContainer>
                <EditIcon src="/editar.svg" />
                Editar atividade
              </QuizButtonContainer>
            )}
            {!isAdmin && (
              <QuizButtonContainer>
                <EditIcon src="/file.svg" />
                Responder atividade
              </QuizButtonContainer>
            )}
          </QuizListItem>
        ))}
      </QuizList>
      {showCreateQuizModal && (
        <CreateQuizModal
          classId={classId}
          onClose={() => setShowCreateQuizModal(false)}
        />
      )}
      {isAdmin && (
        <Button
          type="blue"
          label="Adicionar atividade"
          onClick={() => setShowCreateQuizModal(true)}
          icon={<PlusIcon>+</PlusIcon>}
        />
      )}
    </QuizContainer>
  );
}
