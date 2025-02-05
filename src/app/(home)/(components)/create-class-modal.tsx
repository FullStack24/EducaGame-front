import { Form } from '@/app/login/page.styles';
import { useAuth } from '@/contexts/auth';
import Button from '@/globalComponents/button';
import Input from '@/globalComponents/input';
import Modal from '@/globalComponents/modal';
import { createClass } from '@/services/create-class';
import { useState } from 'react';

interface CreateClassModalProps {
  onClose: () => void;
}

export default function CreateClassModal({ onClose }: CreateClassModalProps) {
  const [name, setName] = useState('');
  const user = useAuth().user;

  async function handleCreateClass() {
    if (!name) return;
    await createClass({ name: name, professorId: user?.id! });
    onClose();
  }
  return (
    <Modal onClose={onClose}>
      <Form>
        <Input
          label="Nome da Turma"
          placeholder="digite o nome da turma"
          setValue={setName}
          value={name}
          type="text"
        />
        <Button label="Criar turma" type="red" onClick={handleCreateClass} />
      </Form>
    </Modal>
  );
}
