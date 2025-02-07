'use client';
import { useAuth } from '@/contexts/auth';
import fetchQuestionsByQuizId from '@/services/fetch-questions-by-quiz-id';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Container } from './page.styles';
import PageTitle from '@/globalComponents/page-title';

export default function QuizPage() {
  const [questions, setQuestions] = useState(['1']);
  const searchParams = Object.fromEntries(useSearchParams().entries());
  const quizId = parseInt(searchParams.id);
  const user = useAuth().user;
  const isAdmin = user?.role === 'professor' || user?.role === 'admin';
  const quizName = 'Mock Quiz';
  async function handleFetchQuizQuestions() {
    const response = await fetchQuestionsByQuizId(quizId);
    if (response) {
      setQuestions(response);
    }
  }

  useEffect(() => {
    handleFetchQuizQuestions();
  }, []);

  return (
    <Container>
      <PageTitle label={quizName} />
      <div>
        {questions?.map((item) => (
          <div>item</div>
        ))}
      </div>
    </Container>
  );
}
