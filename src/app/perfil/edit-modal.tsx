'use client';
import { Form } from '@/app/login/page.styles';
import Button from '@/globalComponents/button';
import Modal from '@/globalComponents/modal';
import { useState } from 'react';
import styled from 'styled-components';
import Colors from '@/globalComponents/colors';
import Input from '@/globalComponents/input';
import updateUser from '@/services/update-user';

const ModalTitle = styled.p`
  font-size: 17px;
  color: ${Colors.gray};
  border-bottom: 1px solid gray;
`;
interface EditUserInfoModalProps {
  onClose: () => void;
  email: string;
  name: string;
}

export default function EditUserModal({
  name,
  email,
  onClose,
}: EditUserInfoModalProps) {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  async function handleUpdateUser() {
    await updateUser(newName, newEmail);
    onClose();
  }
  return (
    <Modal onClose={onClose}>
      <Form>
        <ModalTitle>Editar perfil</ModalTitle>
        <Input
          label="Nome"
          value={newName}
          setValue={setNewName}
          type="text"
          placeholder="Digite o novo nome"
        />
        <Input
          label="Email"
          value={newEmail}
          setValue={setNewEmail}
          type="text"
          placeholder="Digite o novo email"
        />

        <Button label="Atualizar" type="green" onClick={handleUpdateUser} />
        <Button label="Fechar" type="red" onClick={onClose} />
      </Form>
    </Modal>
  );
}
