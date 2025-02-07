import React from 'react';

type DropdownListProps = {
  options: string[];
  selectedOption: string;
  onChange: (value: string) => void;
};

const DropdownList: React.FC<DropdownListProps> = ({ options, selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownList;
