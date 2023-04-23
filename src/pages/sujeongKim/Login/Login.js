import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import LoginButton from './LoginButton';

const LoginSujeong = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-sujeong');
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
            onChange={e => {
              setUserId(e.target.value);
            }}
          />
          <input
            type="password"
            className="loginPw loginInput"
            name="userPw"
            placeholder="비밀번호"
            onChange={e => {
              setUserPw(e.target.value);
            }}
          />
          {userId.includes('@') && userPw.length >= 5 ? (
            <LoginButton
              btnOn={false}
              goToMain={goToMain}
              BtnColor={'loginBtnOn'}
            />
          ) : (
            <LoginButton btnOn={true} goToMain={'/'} BtnColor={''} />
          )}
        </form>
        <a href="/" className="findPw">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </main>
  );
};

export default LoginSujeong;
