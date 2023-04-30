import React, { useState, useEffect } from 'react';
import { FOOTER_INFO_LIST } from './FOOTER_INFO_LIST';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="mainFooter">
      <ul className="footerTop">
        {FOOTER_INFO_LIST.map(item => {
          return (
            <li key={item.id}>
              <a>{item.listItem}</a>
            </li>
          );
        })}
      </ul>
      <p>© 2023 INSTAGRAM FROM META</p>
    </footer>
  );
};
export default Footer;
