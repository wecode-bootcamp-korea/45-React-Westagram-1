import './Login.scss';
import '../../../styles/common.scss';
import { Link, useNavigate } from 'react-router-dom';

function Inputs() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/main');
  };

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
}

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
  return (
    <div class="loginBox">
      <div class="container">
        <Westagram />
        <Inputs />
      </div>
      <Footer />
    </div>
  );
};

export default LoginKyoungjin;
