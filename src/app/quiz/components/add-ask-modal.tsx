import { Form } from '@/app/login/page.styles';
import Button from '@/globalComponents/button';
import Input from '@/globalComponents/input';
import Modal from '@/globalComponents/modal';
import Select from '@/globalComponents/select';
import CreateNewQuestion from '@/services/create-new-question';
import { useState } from 'react';

interface CreateAskModalProps {
  onClose: () => void;
  quizId: number;
}

export default function AddAskModal({ quizId, onClose }: CreateAskModalProps) {
  const [text, setText] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  async function handleCreateAsk() {
    await CreateNewQuestion({
      texto: text,
      quizId,
      correta: isCorrect,
    });

    onClose();
  }

  return (
    <Modal onClose={onClose}>
      <Form>
        <Input
          label="Texto da pergunta"
          placeholder="digite a pergunta"
          setValue={setText}
          value={text}
          type="textarea"
        />
        <Select
          options={[
            { value: true, name: 'Verdadeiro' },
            { value: false, name: 'Falso' },
          ]}
          value={isCorrect.toString()}
          onChange={setIsCorrect}
        />
        <Button label="Fechar" type="green" onClick={onClose} />
        <Button label="Criar" type="blue" onClick={handleCreateAsk} />
      </Form>
    </Modal>
  );
}
