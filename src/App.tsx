import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Splash } from './components';
import {
  Dish,
  Dishes,
  Event,
  Events,
  Home,
  Layout,
  NotFound,
  PATHS,
  Reservation,
} from './pages';

const App = () => {
  const preloaded = true;

  if (preloaded) {
    return (
      <Layout>
        <Routes>
          <Route path={PATHS.Home} element={<Home />} />
          <Route path={PATHS.Dishes} element={<Dishes />} />
          <Route path={`${PATHS.Dishes}/:dish`} element={<Dish />} />
          <Route path={PATHS.Events} element={<Events />} />
          <Route path={`${PATHS.Events}/:event`} element={<Event />} />
          <Route path={PATHS.Reservation} element={<Reservation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }

  return <Splash />;
};

export default App;
