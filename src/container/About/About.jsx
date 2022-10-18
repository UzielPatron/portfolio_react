import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'FrontEnd Development',
    description: 'I am a good FrontEnd Developer',
    imgUrl: images.about01
  },
  {
    title: 'Web Design',
    description: 'I am a good FrontEnd Developer',
    imgUrl: images.about02
  },
  {
    title: 'UI/UX',
    description: 'I am a good FrontEnd Developer',
    imgUrl: images.about03
  },
  {
    title: 'Web Animations',
    description: 'I am a good FrontEnd Developer',
    imgUrl: images.about04
  },
] 


const About = () => {

  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Good Development</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {
          abouts.map( (about, idx) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: .5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + idx}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{ about.title }</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{ about.description }</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');