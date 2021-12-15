import React from 'react';
import { Link } from 'react-router-dom';

import { PATHS } from '../pages';

export const Header = () => {
  return (
    <header style={HeaderStyles}>
      <ul style={UlStyles}>
        <Link to={PATHS.Home} style={LiStyles}>
          Главная
        </Link>
        <Link to={PATHS.Dishes} style={LiStyles}>
          Меню
        </Link>
        <Link to={PATHS.Events} style={LiStyles}>
          Мероприятия
        </Link>
        <Link to={PATHS.Reservation} style={LiStyles}>
          Резервирование
        </Link>
      </ul>
    </header>
  );
};

const LiStyles: React.CSSProperties = {
  listStyle: 'none',
  cursor: 'pointer',
  color: 'white',
  marginRight: '25px',
};

const HeaderStyles: React.CSSProperties = {
  width: '100%',
  position: 'sticky',
  top: 0,
  left: 0,
  height: '60px',
  backgroundColor: 'red',
  zIndex: 2,
};

const UlStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '0',
  padding: '0 20px',
};
