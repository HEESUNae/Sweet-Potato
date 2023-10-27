import React from 'react';
import { ImageStore } from '../../../consts/image';
import { StyledLogo } from './style';

interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <StyledLogo onClick={onClick}>
      <img src={ImageStore.sweetPotato} alt="" />
      <h1>고답</h1>
    </StyledLogo>
  );
};

export default Logo;
