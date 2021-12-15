import { DatePicker, TimePicker } from '@mui/lab';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { format } from 'date-fns';
import MuiPhoneNumber from 'material-ui-phone-number';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { IReservationForm } from '../types';

interface IProps {
  onSubmit: (data: IReservationForm) => void;
}

export const Form = ({ onSubmit }: IProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IReservationForm>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      people: 1,
      date: new Date().toDateString(),
      time: new Date().toDateString(),
    },
  });

  const onSubmitHandler = (data: IReservationForm) => {
    onSubmit({
      ...data,
      date: format(new Date(data.date), 'yyyy-MM-dd'),
      time: format(new Date(data.time), 'HH:mm:ss'),
    });
  };

  return (
    <Paper
      component="div"
      variant="outlined"
      style={{ padding: '20px', boxSizing: 'border-box' }}>
      <Typography variant="h4" align="center" paddingBottom={2}>
        Заполните данные
      </Typography>

      <form onSubmit={handleSubmit(onSubmitHandler)} style={{ width: '100%' }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              {...register('name', { required: true })}
              label="Ваше имя"
              required
              fullWidth
            />
            {errors.name && <p>Last name is required.</p>}
          </Grid>

          <Grid item xs={6}>
            <TextField
              {...register('surname', { required: false })}
              label="Ваша фамилия"
              fullWidth
            />
            {errors.surname && <p>Wrong surname</p>}
          </Grid>

          <Grid item xs={6}>
            <Controller
              control={control}
              name="phone"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <MuiPhoneNumber
                  value={value}
                  onChange={(number) => onChange(number)}
                  defaultCountry="by"
                  variant="outlined"
                  required
                  label="Ваш номер телефона"
                  fullWidth
                />
              )}
            />
            {errors.phone && <p>Phone is required.</p>}
          </Grid>

          <Grid item xs={6}>
            <TextField
              {...register('email', { required: false })}
              label="Ваша почта"
              fullWidth
            />
            {errors.email && <p>Wrong email</p>}
          </Grid>

          <Grid item xs={6}>
            <Controller
              control={control}
              name="date"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  value={value}
                  onChange={(date) => {
                    onChange(date);
                  }}
                  inputFormat="yyyy-MM-dd"
                  label="Дата визита"
                  mask="____-__-__"
                  renderInput={(params) => <TextField {...params} required fullWidth />}
                />
              )}
            />
            {errors?.date && errors?.date?.type === 'required' && (
              <p>your error message !</p>
            )}
          </Grid>

          <Grid item xs={6}>
            <Controller
              control={control}
              name="time"
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <TimePicker
                  label="Время визита"
                  value={value}
                  views={['hours', 'minutes', 'seconds']}
                  inputFormat="HH:mm:ss"
                  mask="__:__:__"
                  onChange={(time) => {
                    onChange(time);
                  }}
                  renderInput={(params) => <TextField {...params} required fullWidth />}
                />
              )}
            />
            {errors?.time && errors?.time?.type === 'required' && (
              <p>your error message !</p>
            )}
          </Grid>

          <Grid item xs={6}>
            <TextField
              {...register('people', { required: true })}
              type="number"
              label="Количество гостей"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              required
              fullWidth
            />
            {errors.people && <p>Wrong people</p>}
          </Grid>

          <Grid
            item
            xs={6}
            style={{ display: 'flex' }}
            flexDirection="row-reverse"
            alignItems="flex-end">
            <Button type="submit" variant="outlined" size="large" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
