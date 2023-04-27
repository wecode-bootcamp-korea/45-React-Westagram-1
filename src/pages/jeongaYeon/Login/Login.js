import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJeonga = () => {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main-jeonga');
    // fetch('http://10.58.52.222:3000/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     email: input.id,
    //     password: input.password,
    //   }),
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(data => {
    //     if (data.message === 'SUCCESS') {
    //       localStorage.setItem('token', data.authorization);
    //       alert('로그인 성공');
    //     } else if (data.message === 'PASSWORD_IS_NOT_VALID') {
    //       alert('비밀번호 형식이 잘못되었습니다.');
    //     } else if (data.message === 'INVALID_EMAIL_OR_PASSWORD') {
    //       alert('아이디 혹은 비밀번호를 확인 해 주세요');
    //     }
    //   });
    // .then(response => {
    //   if (response.ok === true) {
    //     return response.json();
    //   } else {
    //     alert('아이디 혹은 비밀번호를 확인해주세요');
    //   }
    // })
    // .then(data => {
    //   if (data.message === 'success') {
    //     localStorage.setItem('token', data.authorization);
    //     alert('로그인 성공');
    //   }
    // });
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
