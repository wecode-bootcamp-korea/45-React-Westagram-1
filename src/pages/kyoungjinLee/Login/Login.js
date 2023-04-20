import './Login.scss';
import '../../../styles/common.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

/*function Inputs() {
  return (
    <div class="inputs">
      <input
        id="Id"
        type="text"
        placeholder="  전화번호, 사용자 이름 또는 이메일"
      />
      <input id="Password" type="password" placeholder="  비밀번호" />
      <button id="login-button" class="noLogin" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
}

function Westagram() {
  return <div class="westagram">Westagram</div>;
}*/

function Footer() {
  return (
    <footer>
      <Link to="/main-kyoungjin" class="link">
        비밀번호를 잊으셨나요?
      </Link>
    </footer>
  );
}

const LoginKyoungjin = () => {
  const [IdData, setIdData] = useState('');
  const [PasswordData, setPasswordData] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main');
  };

  const saveUserId = event => {
    setIdData(event.target.value);
    console.log('Id = ', IdData);
  };

  const saveUserPassword = event => {
    setPasswordData(event.target.value);
    console.log('Password = ', PasswordData);
  };

  return (
    <div class="loginBox">
      <div class="container">
        <div class="westagram">Westagram</div>
        <div class="inputs">
          <input
            className="Id"
            type="text"
            placeholder="  전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="passWord"
            type="password"
            placeholder="  비밀번호"
            onChange={saveUserPassword}
          />
          <button id="login-button" class="noLogin" onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginKyoungjin;
