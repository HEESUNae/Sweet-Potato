import React, { PropsWithChildren } from 'react';
import { StyledLayout } from './style';

import Header from '../Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
