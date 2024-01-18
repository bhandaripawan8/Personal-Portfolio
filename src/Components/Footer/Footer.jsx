import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Pawan</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testi</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookSquare /></a>
        <a href="https://Instagram.com"><FaInstagramSquare /></a>
        <a href="https://github.com"><FaGithubSquare /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Pawan Bhandari. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer