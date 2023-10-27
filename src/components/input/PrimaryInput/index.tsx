import React from 'react';
import { StyledPrimaryInput } from './style';

interface PrimaryInputProps {
  type?: 'text' | 'submit' | 'button' | 'password';
  placeholder?: string;
  register?: any;
}

const PrimaryInput = ({ type = 'text', placeholder, register }: PrimaryInputProps) => {
  return <StyledPrimaryInput type={type} placeholder={placeholder} {...register} />;
};

export default PrimaryInput;
