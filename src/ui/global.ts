import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
        overflowX: 'hidden',
      },
      body: {
        width: '100%',
      },
      '#root': {
        width: '100%',
      },
    },
  }),
);

export const GlobalStyles = () => {
  useStyles();

  return null;
};
