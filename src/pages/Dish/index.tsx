import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getDish } from '../../api';
import { Error, Splash } from '../../components';
import { IDish } from '../../types';

export const Dish = () => {
  const params = useParams();
  const { data, status, error, remove } = useQuery('dish', getDish(Number(params.dish)));

  useEffect(() => {
    return () => remove();
  }, [remove]);

  return (
    <>
      {status === 'error' && <Error>{`${error}`}</Error>}
      {status === 'loading' && <Splash />}
      {status === 'success' && data && <DishExtended {...data} />}
    </>
  );
};

const DishExtended = ({ photo, name, description, weight, price }: IDish) => {
  return (
    <Card sx={{ width: '80%' }}>
      <CardMedia component="img" height="300" image={photo} alt="media" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Цена: {price}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Вес: {weight}
        </Typography>
      </CardContent>
    </Card>
  );
};
