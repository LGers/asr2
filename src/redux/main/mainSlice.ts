import { RegistryItemProps, MainState } from './main.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MainState = {
  registries: [],
  documents: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setRegistries: (state, action: PayloadAction<Array<RegistryItemProps>>) => {
      console.log(action.payload);
      state.registries = action.payload;
    },
  },
});

export const { setRegistries } =
  mainSlice.actions;

export const mainReducer = mainSlice.reducer;
