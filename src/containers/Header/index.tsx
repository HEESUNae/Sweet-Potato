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
      <TextBtn title="로그아웃" onClick={() => alert('작업 예정입니다.')} />
    </StyledHeader>
  );
};

export default Header;
