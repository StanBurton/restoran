import React, { ReactNode } from 'react';

import { IStore } from '../types';

export const defaultStore = {
  contentHeight: 'auto',
  setContentHeight: () => 'auto',
};

const Context = React.createContext<IStore>(defaultStore);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [contentHeight, setContentHeight] = React.useState('auto');

  const setContentHeightFunc = React.useCallback((height: string) => {
    setContentHeight(height);
  }, []);

  return (
    <Context.Provider value={{ contentHeight, setContentHeight: setContentHeightFunc }}>
      {children}
    </Context.Provider>
  );
};

export const Store = Context;
