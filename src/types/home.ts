export interface IHome {
  id: number;
  name: string;
  phone: string;
  descrp: string;
  mail: string;
  photo: [string, string];
}

export interface IHomePhoto {
  id: number;
  photo: string;
}
