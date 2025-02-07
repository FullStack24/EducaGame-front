import { useCallback, useEffect, useState } from 'react';
import FetchQuizzesByClassId from '@/services/fetch-quizzes-by-class-id';
import Button from '@/globalComponents/button';
import CreateQuizModal from './create-quiz-modal';
import styled from 'styled-components';
import Colors from '@/globalComponents/colors';
import { PlusIcon } from '../page.styles';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${Colors.gray};
`;

const QuizTitle = styled.h2`
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;
const QuizAskQuantity = styled.p`
  font-size: 13px;
`;

const QuizButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid gray;
  margin: 10px 0;
  gap: 5px;
`;
const EditIcon = styled.img`
  width: 15px;
`;
const QuizList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;
const QuizListItem = styled.li`
  background-color: ${Colors.white};
  min-width: 155px;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  height: 120px;
  padding: 10px;
  border-radius: 8px;
`;

const QuizSectionTitle = styled.h2`
  font-size: 15px;
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
  const getQuizzes = useCallback(async () => {
    const quizzes = await FetchQuizzesByClassId(classId);
    if (quizzes) {
      setQuizzes(quizzes);
    }
  }, [classId]);

  useEffect(() => {
    getQuizzes();
  }, [showCreateQuizModal, getQuizzes]);

  return (
    <QuizContainer>
      <QuizSectionTitle>Atividades disponíveis</QuizSectionTitle>
      <QuizList>
        {quizzes?.map((quiz) => (
          <QuizListItem key={quiz.id}>
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
