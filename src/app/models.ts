export interface IContact {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  position: string;
  entreprise: string;
  address: string;
}

export interface IUser {
  id?:number,
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  profile: string;
}
