'use client';
import fetchStudents from '@/services/find-students';
import { useCallback, useEffect, useState } from 'react';
import AddStudentModal, {
  Student,
} from '../class/components/add-student-modal';
import { useSearchParams } from 'next/navigation';
import List from '@/globalComponents/list';
import ClassListStudentItem from '../class/components/class-list-student-item';
import Button from '@/globalComponents/button';
import { useAuth } from '@/contexts/auth';
import styled from 'styled-components';

const ClassName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default function Alunos() {
  const [studentsByClass, setStudentsByClass] = useState<Student[]>([]);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const user = useAuth().user;
  const isAdmin = user?.role === 'admin' || user?.role === 'professor';
  const searchParams = Object.fromEntries(useSearchParams().entries());
  const classId = parseInt(searchParams.classId);
  const className = searchParams.className;

  const handleFetchStudents = useCallback(async () => {
    const response = await fetchStudents(classId);
    if (response) {
      setStudentsByClass(response);
    }
  }, [classId]);

  useEffect(() => {
    handleFetchStudents();
  }, [handleFetchStudents]);
  return (
    <div>
      <ClassName>
        {className}{' '}
        {isAdmin && (
          <Button
            label="Adicionar alunos"
            onClick={() => setShowAddStudentModal(true)}
            type="blue"
          />
        )}
      </ClassName>
      <br />
      <br />

      <List>
        {studentsByClass?.map((student) => (
          <ClassListStudentItem key={student.id} student={student} />
        ))}
      </List>
      {showAddStudentModal && (
        <AddStudentModal
          studentsInClass={studentsByClass}
          classId={classId}
          onClose={() => setShowAddStudentModal(false)}
          handleFetchStudents={handleFetchStudents}
        />
      )}
    </div>
  );
}
