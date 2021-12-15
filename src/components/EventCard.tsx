import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

import { IEvent } from '../types';
import { cropText } from '../utils';

interface IProps extends IEvent {
  onClick: () => void;
}

export const EventCard = ({ name, description, data, time, photo, onClick }: IProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={photo} alt="media" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cropText(name, 15)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cropText(description, 50)}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Дата: {data}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Вреия: {time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};
