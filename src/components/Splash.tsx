import { CircularProgress } from '@mui/material';
import React from 'react';

import { header_height } from '../ui';

export const Splash = () => {
  return (
    <div
      style={{
        width: '100%',
        height: `calc(100vh - ${header_height})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: header_height,
        boxSizing: 'border-box',
      }}>
      <CircularProgress color="error" />
    </div>
  );
};
