import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginSujeong = () => {
  const [UserId, setUserId] = useState('');
  const [UserPw, setUserPw] = useState('');
  const navigate = useNavigate();

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const saveUserPw = event => {
    setUserPw(event.target.value);
  };

  const goToMain = () => {
    navigate('./main-sujeong');
  };

  return (
    <main className="login">
      <div className="borderBox">
        <h1 className="logo">Westagram</h1>
        <form className="loginForm">
          <input
            type="text"
            className="loginId loginInput"
            name="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            type="password"
            className="loginPw loginInput"
            name="userPw"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <input
            type="button"
            className="loginBtn"
            value="로그인"
            onClick={goToMain}
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
