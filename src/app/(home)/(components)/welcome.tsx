import { ContentBox } from '../page.styles';

interface WelcomeProps {
  name?: string;
}
export default function Welcome({ name }: WelcomeProps) {
  return (
    <>
      {!!name && <h1>Bem vindo, {name}!</h1>}
      {!name && <h1>Bem vindo!</h1>}
    </>
  );
}
