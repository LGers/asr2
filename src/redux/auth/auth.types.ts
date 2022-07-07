export interface User {
  id: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  country: string;
  city: string;
  phone: string;
}

export interface AuthState {
  isAuth: boolean;
  isFetching: boolean;
  user: User;
  error: {
    message: string;
    statusCode: number;
  };
}