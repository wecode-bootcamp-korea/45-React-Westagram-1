import React, { useState } from 'react';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="mainFooter">
      <ul className="footerTop">
        <li>{}</li>
      </ul>
      <p>© 2023 INSTAGRAM FROM META</p>
    </footer>
  );
};
export default Footer;

FOOTER_LIST = [
  { id: 0, listItem: '소개' },
  { id: 1, listItem: '도움말' },
  { id: 2, listItem: '홍보 센터' },
  { id: 3, listItem: 'API' },
  { id: 4, listItem: '채용 정보' },
  { id: 5, listItem: '개인정보처리방침' },
  { id: 6, listItem: '약관' },
  { id: 7, listItem: '위치' },
  { id: 8, listItem: '인기 계정' },
  { id: 9, listItem: '해시태그' },
  { id: 10, listItem: '언어' },
];
