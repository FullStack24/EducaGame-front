import { Form } from '@/app/login/page.styles';
import Button from '@/globalComponents/button';
import Input from '@/globalComponents/input';
import Modal from '@/globalComponents/modal';
import { createQuiz } from '@/services/create-quiz';
import { useState } from 'react';

interface CreateQuizModalProps {
  onClose: () => void;
  classId: number;
}

export default function CreateQuizModal({
  onClose,
  classId,
}: CreateQuizModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  async function handleCreateQuiz() {
    if (!title || !category) return;
    await createQuiz({
      title,
      categoria: category,
      description,
      turmaId: classId,
    });
    onClose();
  }
  return (
    <Modal onClose={onClose}>
      <Form>
        <Input
          label="Título do Quiz *"
          placeholder="digite o título"
          setValue={setTitle}
          value={title}
          type="text"
        />
        <Input
          label="Categoria do Quiz *"
          placeholder="digite a categoria"
          setValue={setCategory}
          value={category}
          type="text"
        />
        <Input
          label="Descrição do Quiz"
          placeholder="digite a descrição"
          setValue={setDescription}
          value={description}
          type="text"
        />
        <Button label="Criar Novo Quiz" type="red" onClick={handleCreateQuiz} />
      </Form>
    </Modal>
  );
}
