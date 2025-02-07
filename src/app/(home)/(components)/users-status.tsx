import CardButton from '@/globalComponents/card-button';
import { useRouter } from 'next/navigation';

export default function UsersStatus() {
  const router = useRouter();
  function handleClick() {
    router.push('/perfil');
  }
  return <CardButton icon="/perfil.svg" label="Perfil" onCLick={handleClick} />;
}
