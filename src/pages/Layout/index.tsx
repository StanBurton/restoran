import { Container } from '@mui/material';
import React, { ReactNode } from 'react';

import { Header } from '../../components';
import { useLayout } from '../../hooks';
import { header_height } from '../../ui';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { contentHeight } = useLayout();

  return (
    <>
      <Header />
      <Container
        maxWidth={'md'}
        style={{
          minHeight: `calc(100% - ${header_height})`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '20px',
          boxSizing: 'border-box',
          height: contentHeight,
        }}>
        {children}
      </Container>
    </>
  );
};
