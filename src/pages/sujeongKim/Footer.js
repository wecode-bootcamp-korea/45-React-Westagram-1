import React, { useState, useEffect } from 'react';
import './footer.scss';

const Footer = () => {
  const [footerItem, setFooterItem] = useState([]);

  useEffect(() => {
    fetch('/data/footer.json')
      .then(res => res.json())
      .then(data => {
        setFooterItem(data);
      });
  }, []);

  return (
    <footer className="mainFooter">
      <ul className="footerTop">
        {footerItem.map(item => {
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
