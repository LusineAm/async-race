import React from 'react';
import '@src/widgets/footer/style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="https://github.com/lusineam" target="_blank" rel="noreferrer" className="footer__link">
              LusineAm
            </a>
          </li>
          <li className="footer__item">2024</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
