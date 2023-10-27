import React from 'react';
import { StyledTextBtn } from './style';

interface TextBtnProps {
  title: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const TextBtn = ({ type = 'button', title, onClick }: TextBtnProps) => {
  return (
    <StyledTextBtn type={type} onClick={onClick}>
      {title}
    </StyledTextBtn>
  );
};

export default TextBtn;
