import React from 'react';
import './App.css';
import st from "./App.module.css";
import { MainPage } from './pages/MainPage';


export const App = () => {
  return (
    <div className={st.wrapper}>
      <MainPage />
    </div>
  );
}
