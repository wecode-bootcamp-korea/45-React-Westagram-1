import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="/main-kyoungjin" class="link">
        비밀번호를 잊으셨나요?
      </Link>
    </footer>
  );
}

export default Footer;
