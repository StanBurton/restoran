import { Typography } from '@mui/material';
import React from 'react';

import { header_height } from '../ui';

interface IProps {
  children: string;
}

export const Error = ({ children }: IProps) => {
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
      <Typography variant="h3" align="center" color="text.error">
        {children}
      </Typography>
    </div>
  );
};
