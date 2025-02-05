import { useRouter } from 'next/navigation';
import Button from './button';

interface GoBackButtonProps {
  goTo: string;
}
export default function GoBackButton({ goTo }: GoBackButtonProps) {
  const router = useRouter();
  function handleGoBack() {
    router.push(goTo);
  }
  return <Button label="Voltar" onClick={handleGoBack} type="gray" />;
}
