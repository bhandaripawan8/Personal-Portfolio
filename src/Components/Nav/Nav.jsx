import React from 'react';
import './Nav.css'
import {IoHomeOutline} from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };
  return (
    <nav>
      <a href="#" onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active': ''}><IoHomeOutline/></a>
      <a href="#About" onClick={() => handleNavClick('#About')} className={activeNav === '#About' ? 'active': ''}><FaRegUser/></a>
      <a href="#Experience" onClick={() => handleNavClick('#Experience')} className={activeNav === '#Experience' ? 'active': ''}><IoBookOutline /></a>
      <a href="#Services" onClick={() => handleNavClick('#Services')} className={activeNav === '#Services' ? 'active': ''}><RiServiceLine /></a>
      <a href="#Contact" onClick={() => handleNavClick('#Contact')} className={activeNav === '#Contact' ? 'active': ''}><RiContactsLine /></a>
    </nav>
  );
};

export default Nav;
