import React from 'react';
import { StyledPrimaryBtn } from './style';

interface PrimaryBtnProps {
  type?: 'button' | 'submit';
  title: string;
  className?: string;
  $bgcolor?: string;
  onClick?: () => void;
}

const PrimaryBtn = ({ type = 'button', title, onClick, className, $bgcolor }: PrimaryBtnProps) => {
  return (
    <StyledPrimaryBtn type={type} className={className} onClick={onClick} $bgcolor={$bgcolor}>
      {title}
    </StyledPrimaryBtn>
  );
};

export default PrimaryBtn;
