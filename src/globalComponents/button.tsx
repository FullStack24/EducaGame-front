import styled from 'styled-components';
import Colors from './colors';

type colors = 'red' | 'gray' | 'blue' | 'green';
const ButtonComponent = styled.button<{
  type: colors;
}>`
  padding: 5px 20px;
  background-color: ${(props) => Colors[props.type]};
  border: 2px solid transparent;
  color: ${Colors.white};
  /* flex: 1; */
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 200px;
  &:hover {
    background-color: ${Colors.white};
    border: 2px solid
      ${(props) => (props.type === 'red' ? Colors.red : Colors.gray)};
    color: ${(props) => (props.type === 'red' ? Colors.red : Colors.gray)};
  }
`;

interface ButtonProps {
  label: string;
  type: colors;
  icon?: React.ReactNode;
  onClick: () => void;
}
export default function Button({ label, type, icon, onClick }: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    onClick();
  }

  return (
    <ButtonComponent onClick={handleClick} type={type}>
      {icon}
      {label}
    </ButtonComponent>
  );
}
