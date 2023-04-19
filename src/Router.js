import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainJeonga from './pages/jeongaYeon/Main/Main';
import LoginJeonga from './pages/jeongaYeon/Login/Login';

import MainKyoungjin from './pages/kyoungjinLee/Main/Main';
import LoginKyoungjin from './pages/kyoungjinLee/Login/Login';

import MainSujeong from './pages/sujeongKim/Main/Main';
import LoginSujeong from './pages/sujeongKim/Login/Login';

import MainWonjun from './pages/wonjunLee/Main/Main';
import LoginWonjun from './pages/wonjunLee/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-jeonga" element={<LoginJeonga />} />
        <Route path="/main-jeonga" element={<MainJeonga />} />
        <Route path="/login-kyoungjin" element={<LoginKyoungjin />} />
        <Route path="/main-kyoungjin" element={<MainKyoungjin />} />
        <Route path="/login-sujeong" element={<LoginSujeong />} />
        <Route path="/main-sujeong" element={<MainSujeong />} />
        <Route path="/login-wonjun" element={<LoginWonjun />} />
        <Route path="/main-wonjun" element={<MainWonjun />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
