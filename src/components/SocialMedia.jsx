import React from 'react';
import { BsGithub, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://www.linkedin.com/in/uziel-patron-50a474227/' target='_BLANK'>
        <FaLinkedin />
      </a>
      <a href='https://github.com/UzielPatron' target='_BLANK'>
        <BsGithub />
      </a>
      <a href='https://api.whatsapp.com/send?phone=542473519714' target='_BLANK'>
        <BsWhatsapp />
      </a>
    </div>
  )
}

export default SocialMedia