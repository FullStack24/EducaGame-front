import { useEffect, useState } from 'react';
import findClasses from '@/services/buscar-turmas';
import {
  AddNewButton,
  Class,
  ClassName,
  ClassTitle,
  StudentsLength,
  ClassBox,
  StudentsLenghtText,
  Wrapper,
} from './classes.styles';
import IClass from '../../(interfaces)/class.interface';
import CreateClassModal from './create-class-modal';
import { useRouter } from 'next/navigation';

interface ClassesProps {
  isAdmin: boolean;
}
export default function Classes({ isAdmin }: ClassesProps) {
  const [showModal, setShowModal] = useState(false);
  const [classes, setClasses] = useState<IClass[]>([]);
  const router = useRouter();
  async function fetchClasses() {
    const classes = await findClasses();
    if (classes.length > 0) {
      setClasses(classes);
    }
  }

  function handleGoToClass(id: number, name: string) {
    router.push(`class?id=${id}&name=${name}`);
  }
  useEffect(() => {
    fetchClasses();
  }, [showModal]);

  return (
    <ClassBox>
      {showModal && <CreateClassModal onClose={() => setShowModal(false)} />}
      <ClassTitle>
        Turmas:
        {isAdmin && (
          <AddNewButton onClick={() => setShowModal(true)}>
            <p>+</p> Nova turma
          </AddNewButton>
        )}
      </ClassTitle>

      <Wrapper>
        {classes?.map((item) => (
          <Class
            onClick={() => handleGoToClass(item.id, item.name)}
            key={item.id}
          >
            <ClassName>{item.name}</ClassName>
            <StudentsLength>
              <StudentsLenghtText>Alunos</StudentsLenghtText>
              {item.alunos?.length}
            </StudentsLength>
          </Class>
        ))}
      </Wrapper>
    </ClassBox>
  );
}
