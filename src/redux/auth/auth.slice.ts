import { AuthState, User } from './auth.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const user: User = {
  id: 0,
  firstName: '',
  lastName: '',
  patronymic: '',
  country: '',
  city: '',
  phone: '',
}
const initialState: AuthState = {
  isAuth: true,
  isFetching: false,
  user,
  error: {
    message: '',
    statusCode: 0,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setUser } =
  authSlice.actions;

export const authReducer = authSlice.reducer;