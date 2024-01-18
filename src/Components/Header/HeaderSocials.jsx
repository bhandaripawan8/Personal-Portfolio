import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/pawan-bhandari-899388176/" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com" target='_blank'><FaGithubSquare/></a>
        <a href="https://Facebook.com" target='_blank'><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocials