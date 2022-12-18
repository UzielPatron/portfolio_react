import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import emailjs from 'emailjs-com';

import './Footer.scss';

const MySwal = withReactContent(Swal);


const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [ name ]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    emailjs.sendForm('portfolio_uzielpatron', 'template_wbyu20a', e.target, 'EBAOFCh_V6REj1aA1')
      .then( () => {
        MySwal.fire('Mensaje enviado con éxito', '', 'success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setIsFormSubmitted(true);
      })
      .catch( () => {
        MySwal.fire('Error', 'Ocurrió un error inesperado al enviar el mensaje, por favor intenta nuevamente más tarde', 'error');
      });
    
    setLoading(false);
  };
  
  return (
    <>
      <h2 className='head-text'>Contáctame</h2>

      <div className='app__footer-cards'>
        <a
          href="mailto:uzielpatron2020@gmail.com?Subject=Quisiera%20ponerme%20en%20contacto%20contigo"
          target='_BLANK'
          className='p-text'
        >
          <div className='app__footer-card'>
            <img src={ images.email } alt="email" />
            <p>uzielpatron2020@gmail.com</p>
          </div>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=542473519714"
          target='_BLANK'
          className='p-text'>
          <div className='app__footer-card'>
            <img src={ images.mobile } alt="mobile" />
            <p>+54 (2473) 519714</p>
          </div>
        </a>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contacto', 'app__primarybg')