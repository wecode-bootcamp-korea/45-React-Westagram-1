import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';
import './Login.scss';

const LoginSujeong = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const loginValid =
    inputValues.email.includes('@') && inputValues.password.length >= 5;

  const goToMain = () => {
    navigate('/main-sujeong');
  };

  const token = localStorage.getItem('TOKEN');

  const loginOn = e => {
    e.preventDefault();
    fetch('http://10.58.52.248:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(res => res.json())
      .then(data => localStorage.setItem('TOKEN', data.accessToken));
  };

  return (
    <main className="login">
      <div className="borderBox">
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <input
            name="email"
            type="text"
            className="loginId loginInput"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            className="loginPw loginInput"
            placeholder="비밀번호"
            onChange={handleInput}
          />

          <LoginButton
            btnOn={!loginValid}
            goToMain={loginValid ? goToMain : '/'}
            BtnColor={loginValid ? 'loginBtnOn' : ''}
            loginOn={loginOn}
          />
        </form>
        <a href="/" className="findPw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </main>
  );
};

export default LoginSujeong;
