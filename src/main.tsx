import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ruLocale from 'date-fns/locale/ru';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';
import { Provider } from './store';
import { GlobalStyles, theme } from './ui';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} />
      <CssBaseline />
      <Router>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
          <GlobalStyles />
          <Provider>
            <App />
          </Provider>
        </LocalizationProvider>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
