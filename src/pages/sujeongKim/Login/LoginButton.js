import React from 'react';
import './LoginButton.scss';

const LoginButton = ({ btnOn, BtnColor, goToMain }) => {
  return (
    <button
      disabled={btnOn}
      className={`loginBtn ${BtnColor}`}
      onClick={() => goToMain()}
    >
      로그인
    </button>
  );
};
export default LoginButton;
