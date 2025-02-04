import React from 'react';
import styled from 'styled-components';

interface SelectProps {
  options: { name: string; value: string }[];
  value: string;
  onChange: (value: 'user' | 'admin') => void;
}

const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const SelectElement = styled.select`
  appearance: none;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  color: black;
  font-size: 12px;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  pointer-events: none;
  transform: translateY(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000;
`;

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <SelectContainer>
      <SelectElement
        value={value}
        onChange={(e) => onChange(e.target.value as 'user' | 'admin')}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </SelectElement>
      <Arrow />
    </SelectContainer>
  );
};

export default Select;
