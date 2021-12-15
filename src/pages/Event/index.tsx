import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getEvent } from '../../api';
import { Error, Splash } from '../../components';
import { IEvent } from '../../types';

export const Event = () => {
  const params = useParams();
  const { data, status, error, remove } = useQuery(
    'event',
    getEvent(Number(params.event)),
  );

  useEffect(() => {
    return () => remove();
  }, [remove]);

  return (
    <>
      {status === 'error' && <Error>{`${error}`}</Error>}
      {status === 'loading' && <Splash />}
      {status === 'success' && data && <EventExtended {...data} />}
    </>
  );
};

const EventExtended = ({ name, description, data, time, photo }: IEvent) => {
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
          Дата: {data}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Время: {time}
        </Typography>
      </CardContent>
    </Card>
  );
};
