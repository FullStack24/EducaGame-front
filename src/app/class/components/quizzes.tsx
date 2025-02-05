import { useEffect, useState } from 'react';
import { ContentBox, SectionTitle } from '../../(home)/page.styles';
import FetchQuizzesByClassId from '@/services/fetch-quizzes-by-class-id';
import List from '@/globalComponents/list';
import Button from '@/globalComponents/button';
import CreateQuizModal from './create-quiz-modal';
import QuizListItem from './quiz-list-item';

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
  async function getQuizzes() {
    const quizzes = await FetchQuizzesByClassId(classId);
    if (quizzes) {
      setQuizzes(quizzes);
    }
  }

  useEffect(() => {
    getQuizzes();
  }, [showCreateQuizModal]);

  return (
    <ContentBox>
      <SectionTitle>
        Quizzes
        {isAdmin && (
          <Button
            type="gray"
            label="Novo Quiz"
            onClick={() => setShowCreateQuizModal(true)}
          />
        )}
      </SectionTitle>
      <List>
        {quizzes?.map((quiz) => (
          <QuizListItem
            category={quiz.categoria}
            id={quiz.id}
            title={quiz.title}
          />
        ))}
      </List>
      {showCreateQuizModal && (
        <CreateQuizModal
          classId={classId}
          onClose={() => setShowCreateQuizModal(false)}
        />
      )}
    </ContentBox>
  );
}
