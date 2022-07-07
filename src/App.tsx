import React, { useEffect } from 'react';
import './App.css';
import st from "./App.module.css";
import { MainPage } from './pages/MainPage';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/auth/auth.slice';
import { currentUser } from './__mock__/fakeData';


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(currentUser));
  }, []);

  return (
    <div className={st.wrapper}>
      <MainPage />
    </div>
  );
}
