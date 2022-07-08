import React, { useEffect } from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import { MainPage } from './pages/MainPage';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/auth/auth.slice';
import { currentUser } from './__mock__/fakeData';
import { Auth } from './pages/Auth';
import { Profile } from './pages/Profile';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(currentUser));
  }, []);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-in" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
  );
}
