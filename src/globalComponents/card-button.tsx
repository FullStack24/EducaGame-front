import styled from 'styled-components';
import Colors from './colors';

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  width: 100%;
  color: ${Colors.gray};
  align-items: center;
  background-color: ${Colors.white};
  border-radius: 10px;
  font-size: 18px;
  font-weight: 400;
`;

const Icon = styled.img`
  width: 25px;
`;

interface CardButtonProps {
  label: string;
  onCLick: () => void;
  icon: string;
}
export default function CardButton({ label, onCLick, icon }: CardButtonProps) {
  return (
    <Button onClick={onCLick}>
      {label}
      <Icon src={icon} />
    </Button>
  );
}
