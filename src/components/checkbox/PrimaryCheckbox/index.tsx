import React from 'react';
import { StyledPrimaryCheckbox } from './style';

interface PrimaryCheckboxProps {
  id: string;
  title: string;
  register?: any;
  onClick?: () => void;
}

const PrimaryCheckbox = ({ id, title, register, onClick }: PrimaryCheckboxProps) => {
  return (
    <StyledPrimaryCheckbox>
      <input type="checkbox" id={id} {...register} />
      <label htmlFor={id}>{title}</label>
    </StyledPrimaryCheckbox>
  );
};

export default PrimaryCheckbox;
