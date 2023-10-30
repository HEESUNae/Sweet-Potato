import React from 'react';
import { StyledHeader } from './style';

import Logo from '../../components/logo/Logo';
import TextBtn from '../../components/button/TextBtn';
import useCommon from '../../hooks/useCommon';

const Header = () => {
  const { navigation } = useCommon();

  return (
    <StyledHeader>
      <Logo onClick={() => navigation('/')} />
      <TextBtn title="로그아웃" onClick={() => navigation('/')} />
    </StyledHeader>
  );
};

export default Header;
