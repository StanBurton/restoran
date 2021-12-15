import React, { useEffect } from 'react';
import { useMutation } from 'react-query';

import { setReservation } from '../../api';
import { Error, Form, Splash, Success } from '../../components';
import { useLayout } from '../../hooks';
import { IReservationForm } from '../../types';
import { header_height } from '../../ui';

export const Reservation = () => {
  const { setContentHeight } = useLayout();

  const { mutate, status, error } = useMutation<
    unknown,
    unknown,
    IReservationForm,
    unknown
  >((data) => setReservation(data));

  useEffect(() => {
    setContentHeight(`calc(100vh - ${header_height})`);
    return () => setContentHeight('auto');
  }, [setContentHeight]);

  return (
    <>
      {status === 'error' && <Error>{`${error}`}</Error>}
      {status === 'loading' && <Splash />}
      {status === 'idle' && <Form onSubmit={mutate} />}
      {status === 'success' && <Success>Заявка отправлена</Success>}
    </>
  );
};
