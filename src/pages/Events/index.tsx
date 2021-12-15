import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';

import { getEvents } from '../../api';
import { Error, EventCard, Splash } from '../../components';

export const Events = () => {
  const navigate = useNavigate();
  const { data, status, error, remove } = useQuery('events', getEvents);

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
          {data.map((event) => (
            <Grid item xs={4} key={event.id}>
              <EventCard {...event} onClick={() => onClick(event.id)} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
