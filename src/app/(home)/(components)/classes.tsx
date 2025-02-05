import { useEffect, useState } from 'react';
import { ContentBox, SectionTitle } from '../page.styles';
import findClasses from '@/services/buscar-turmas';
import {
  Class,
  ClassName,
  ProfessorName,
  StudentsLength,
  Wrapper,
} from './classes.styles';
import Button from '@/globalComponents/button';
import IClass from '../../interfaces/class.interface';
import CreateClassModal from './create-class-modal';
import { useRouter } from 'next/navigation';

export default function Classes() {
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
    <ContentBox>
      {showModal && <CreateClassModal onClose={() => setShowModal(false)} />}
      <SectionTitle>
        Turmas
        <Button
          label="Nova Turma"
          onClick={() => setShowModal(true)}
          type="gray"
        />
      </SectionTitle>
      <Wrapper>
        {classes?.map((item) => (
          <Class
            onClick={() => handleGoToClass(item.id, item.name)}
            key={item.id}
          >
            <ClassName>{item.name}</ClassName>
            <StudentsLength>{item.alunos?.length} alunos</StudentsLength>
          </Class>
        ))}
      </Wrapper>
    </ContentBox>
  );
}
