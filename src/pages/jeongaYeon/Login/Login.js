import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJeonga = () => {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main-jeonga');
  };

  const handleInput = event => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const checkValid = input.id.indexOf('@') === -1 || input.password.length < 5;

  return (
    <main className="login">
      <div className="wrapper">
        <div className="loginWrapper">
          <div className="loginContainer">
            <h1 className="loginTitle">Westagram</h1>
            <div className="loginIdWrapper">
              <input
                name="id"
                onChange={handleInput}
                placeholder="전화번호, 사용자 이름 또는 이메일"
                type="text"
                className="loginId"
              />
            </div>
            <div className="loginPasswordWrapper">
              <input
                name="password"
                onChange={handleInput}
                className="loginPassword"
                placeholder="비밀번호"
                type="password"
              />
            </div>
            <button
              className={
                !checkValid ? 'loginButton loginButtonBlue' : 'loginButton'
              }
              onClick={handleLogin}
              disabled={checkValid}
            >
              로그인
            </button>
            <span className="findPassword">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginJeonga;
