import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';

import { getDishes } from '../../api';
import { DishCard, Error, Splash } from '../../components';

export const Dishes = () => {
  const navigate = useNavigate();
  const { data, status, error, remove } = useQuery('dishes', getDishes);

  const onClick = (id: number) => {
    navigate(`${id}`);
  };

  useEffect(() => {
    return () => remove();
  }, [remove]);

  return (
    <>
      {status === 'error' && <Error>{`${error}`}</Error>}
      {status === 'loading' && <Splash />}
      {status === 'success' && data && (
        <Grid container spacing={2}>
          {data.map((dish) => (
            <Grid item xs={4} key={dish.id}>
              <DishCard {...dish} onClick={() => onClick(dish.id)} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
