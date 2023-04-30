import React from 'react';
import './LoginButton.scss';

const LoginButton = ({ btnOn, BtnColor, loginOn }) => {
  return (
    <button
      disabled={btnOn}
      className={`loginBtn ${BtnColor}`}
      onClick={loginOn}
    >
      로그인
    </button>
  );
};
export default LoginButton;
