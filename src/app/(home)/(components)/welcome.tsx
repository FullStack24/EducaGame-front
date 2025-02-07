import { WelcomeText } from '../page.styles';

interface WelcomeProps {
  name?: string;
}
export default function Welcome({ name }: WelcomeProps) {
  return (
    <>
      {!!name && <WelcomeText>Bem vindo, {name}!</WelcomeText>}
      {!name && <WelcomeText>Bem vindo!</WelcomeText>}
    </>
  );
}
