export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IUserCreate {
  name: string;
  email: string;
  age: number;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface UserDataParams {
  id: string;
}
