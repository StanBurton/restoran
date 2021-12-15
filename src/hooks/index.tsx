import { useContext } from 'react';

import { Store } from '../store';

export const useLayout = () => {
  const { contentHeight, setContentHeight } = useContext(Store);

  return {
    contentHeight,
    setContentHeight,
  };
};
