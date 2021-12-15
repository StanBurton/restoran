import { IDish, IEvent, IHome, IHomePhoto, IReservationForm } from '../types';

export const getHome = (): Promise<IHome[]> => {
  return fetch(`${import.meta.env.VITE_API_URL}/home/home/`).then((res) => res.json());
};

export const getHomePhoto = (): Promise<IHomePhoto[]> => {
  return fetch(`${import.meta.env.VITE_API_URL}/home/photo/`).then((res) => res.json());
};

export const getDishes = (): Promise<IDish[]> => {
  return fetch(`${import.meta.env.VITE_API_URL}/menu/dish/`).then((res) => res.json());
};

export const getDish = (id: number) => (): Promise<IDish> => {
  return fetch(`${import.meta.env.VITE_API_URL}/menu/dish/${id}`).then((res) =>
    res.json(),
  );
};

export const getEvents = (): Promise<IEvent[]> => {
  return fetch(`${import.meta.env.VITE_API_URL}/activity/`).then((res) => res.json());
};

export const getEvent = (id: number) => (): Promise<IEvent> => {
  return fetch(`${import.meta.env.VITE_API_URL}/activity/${id}`).then((res) =>
    res.json(),
  );
};

export const setReservation = (data: IReservationForm): Promise<IReservationForm> => {
  return fetch(`${import.meta.env.VITE_API_URL}/reservation/create`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
