import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

const LoginJeonga = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/main-jeonga');
  };
  return (
    <main className="container">
      <div className="wrapper">
        <div className="loginWrapper">
          <div className="login">
            <h1 className="loginTitle">Westagram</h1>
            <div className="loginIdWrapper">
              <input
                placeholder="전화번호, 사용자 이름 또는 이메일"
                type="text"
                className="loginId"
              />
            </div>
            <div className="loginPasswordWrapper">
              <input
                className="loginPassword"
                placeholder="비밀번호"
                type="password"
              />
            </div>
            <button className="loginButton" onClick={handleLogin}>
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
