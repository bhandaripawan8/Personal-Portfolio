import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/main.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
          <h5>Hello, I am</h5>
          <h1>Pawan Bhandari</h1>
          <h5 className='text-light'>Front End Developer (React)</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header