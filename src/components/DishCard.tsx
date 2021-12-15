import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

import { IDish } from '../types';
import { cropText } from '../utils';

interface IProps extends IDish {
  onClick: () => void;
}

export const DishCard = ({
  photo,
  name,
  description,
  price,
  weight,
  onClick,
}: IProps) => {
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
          Цена: {price}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Вес: {weight}
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
