import styled from 'styled-components';
import Colors from './colors';

const ButtonComponent = styled.button<{ type: 'red' | 'gray'; icon?: string }>`
  padding: 5px 20px;
  background-color: ${(props) =>
    props.type === 'red' ? Colors.red : Colors.gray};
  border: 2px solid transparent;
  color: ${Colors.white};
  /* flex: 1; */
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${Colors.white};
    border: 2px solid
      ${(props) => (props.type === 'red' ? Colors.red : Colors.gray)};
    color: ${(props) => (props.type === 'red' ? Colors.red : Colors.gray)};
  }
`;

interface ButtonProps {
  label: string;
  type: 'red' | 'gray';
  icon?: string;
  onClick: () => void;
}
export default function Button({ label, type, icon, onClick }: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    onClick();
  }

  return (
    <ButtonComponent onClick={handleClick} type={type} icon={icon}>
      {label}
    </ButtonComponent>
  );
}
