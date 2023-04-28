import { useState } from 'react';
import Footer from './footer';
import './Login.scss';

const LoginKyoungjin = () => {
  const [IdData, setIdData] = useState('');
  const [PasswordData, setPasswordData] = useState('');
  const [validation, setValidation] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = () => {
    // navigate('/main-kyoungjin');
    fetch('http://10.58.52.140:3001/users/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: IdData,
        password: PasswordData,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        localStorage.setItem('token', data.accessToken);
      });
  };

  const saveUserId = event => {
    setIdData(event.target.value);
  };

  const saveUserPassword = event => {
    setPasswordData(event.target.value);
  };

  const IdValidation = () => {
    if (IdData.indexOf('@') !== -1 && PasswordData.length >= 5) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <div class="loginKyoungJin">
      <div class="container">
        <div class="westagram">Westagram</div>
        <div class="inputs">
          <input
            className="Id"
            type="text"
            placeholder="  전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            onKeyUp={IdValidation}
          />
          <input
            className="passWord"
            type="password"
            placeholder="  비밀번호"
            onChange={saveUserPassword}
            onKeyUp={IdValidation}
          />
          <button
            id="login-button"
            className={validation ? 'yesLogin' : 'noLogin'}
            onClick={handleLogin}
            disabled={validation ? false : true}
          >
            로그인
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginKyoungjin;
