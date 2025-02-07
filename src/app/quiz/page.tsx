'use client';
import { useAuth } from '@/contexts/auth';
import fetchQuestionsByQuizId from '@/services/fetch-questions-by-quiz-id';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  AddNewAsk,
  Buttons,
  Container,
  Falso,
  Questao,
  QuestionContainer,
  QuestionsWrapper,
  RightAnswer,
  TextBox,
  Texto,
  Verdadeiro,
} from './page.styles';
import PageTitle from '@/globalComponents/page-title';
import AddAskModal from './components/add-ask-modal';

export default function QuizPage() {
  const [questions, setQuestions] = useState<
    {
      texto: string;
      correta: boolean;
    }[]
  >([]);
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const searchParams = Object.fromEntries(useSearchParams().entries());
  const quizId = parseInt(searchParams.id);
  const user = useAuth().user;
  const isAdmin = user?.role === 'professor' || user?.role === 'admin';

  async function handleFetchQuizQuestions() {
    const response = await fetchQuestionsByQuizId(quizId);
    if (response) {
      setQuestions(response.perguntas);
      setName(response.title);
    }
  }

  useEffect(() => {
    handleFetchQuizQuestions();
  }, [quizId, showModal, handleFetchQuizQuestions]);

  return (
    <Container>
      {isAdmin && (
        <AddNewAsk onClick={() => setShowModal(true)}>
          + Adicionar nova pergunta
        </AddNewAsk>
      )}
      <PageTitle label={name} />
      <QuestionsWrapper>
        {questions?.map((item, i) => (
          <QuestionContainer key={i}>
            <TextBox>
              <Questao>Questão {i + 1} </Questao>
              <Texto>{item.texto}</Texto>
            </TextBox>
            <Buttons>
              <Verdadeiro>Verdadeiro</Verdadeiro>
              <Falso>Falso</Falso>
              {isAdmin && (
                <RightAnswer>
                  {` Resposta correta: 
                 ${item.correta ? 'Verdadeira' : 'Falso'}`}
                </RightAnswer>
              )}
            </Buttons>
          </QuestionContainer>
        ))}
      </QuestionsWrapper>

      {showModal && (
        <AddAskModal onClose={() => setShowModal(false)} quizId={quizId} />
      )}
    </Container>
  );
}
