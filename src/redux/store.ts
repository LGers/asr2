import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth.slice';
import { mainReducer } from './main/mainSlice';
// import { boardsReducer } from './boards/boards.slice';
// import { boardReducer } from './board/board.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    main: mainReducer,
    // board: boardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
