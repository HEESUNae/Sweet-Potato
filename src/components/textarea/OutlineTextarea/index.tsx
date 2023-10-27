import React from 'react';
import { StyledOutlineTextarea } from './style';

interface OutlineTextareaProps {
  placeholder?: string;
  maxLength?: number;
  register?: any;
  defaultValue?: string;
}

const OutlineTextarea = ({ placeholder, maxLength, register, defaultValue = '' }: OutlineTextareaProps) => {
  return (
    <StyledOutlineTextarea placeholder={placeholder} maxLength={maxLength} defaultValue={defaultValue} {...register} />
  );
};

export default OutlineTextarea;
