import { Grid, Typography } from '@mui/material';
import Image from 'material-ui-image';
import React from 'react';
import { useQueries } from 'react-query';

import { getHome, getHomePhoto } from '../../api';
import { Error, Splash } from '../../components';

export const Home = () => {
  const [
    { data: dataHome, status: statusHome, error: errorHome },
    { data: dataPhoto, status: statusPhoto, error: errorPhoto },
  ] = useQueries([
    { queryKey: ['home', 1], queryFn: getHome },
    { queryKey: ['home-photo', 2], queryFn: getHomePhoto },
  ]);

  return (
    <>
      {(statusHome === 'error' || statusPhoto === 'error') && (
        <Error>{`${errorHome || errorPhoto}` || 'error'}</Error>
      )}

      {(statusHome === 'loading' || statusPhoto === 'loading') && <Splash />}

      {statusHome === 'success' &&
        statusPhoto === 'success' &&
        dataHome &&
        dataHome[0] &&
        dataPhoto &&
        dataPhoto[0] && (
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h3" align="center">
                {dataHome[0].name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Image
                src={dataPhoto[0].photo}
                cover
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
                imageStyle={{ width: '100%', height: '100%' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" align="justify">
                {dataHome[0].descrp}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" align="center">
                Email: {dataHome[0].mail}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" align="center">
                Телефон: {dataHome[0].phone}
              </Typography>
            </Grid>
          </Grid>
        )}
    </>
  );
};
