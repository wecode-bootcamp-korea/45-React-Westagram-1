import React from 'react';
import './LoginButton.scss';

const LoginButton = props => {
  console.log(props);
  return (
    <button
      disabled={props.btnOn}
      className={`loginBtn ${props.BtnColor}`}
      onClick={() => props.goToMain()}
    >
      로그인
    </button>
  );
};
export default LoginButton;
