import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sanketh B M</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/sanketh_b_m"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.github.com/SankethBM"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        
          <a
            href="https://www.linkedin.com/in/sanketh-b-m"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
          Made&nbsp;with&nbsp;
          <span className="footer__heart">❤️</span>
          &nbsp;by&nbsp;
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/sanketh-b-m"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanketh B M
          </a>
          &nbsp;· © 2025&nbsp;| All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
