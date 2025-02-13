'use client';

import CardButton from '@/globalComponents/card-button';
import { useRouter } from 'next/navigation';

export default function Ranking() {
  const router = useRouter();
  function handleClick() {
    router.push('/ranking');
  }
  return (
    <CardButton icon="/ranking.svg" label="Ranking" onCLick={handleClick} />
  );
}
