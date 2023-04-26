import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import LoginButton from './LoginButton';

const LoginSujeong = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const loginValid =
    inputValues.email.includes('@') && inputValues.password.length >= 5;

  const goToMain = () => {
    navigate('/main-sujeong');
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
            btnOn={loginValid ? false : true}
            goToMain={loginValid ? goToMain : '/'}
            BtnColor={loginValid ? 'loginBtnOn' : ''}
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
