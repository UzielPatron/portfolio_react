import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'FrontEnd Development',
    description: 'I love frontend development and expanding my knowledge especially in React.JS.',
    imgUrl: images.about01
  },
  {
    title: 'Backend Development',
    description: 'Perfecting my knowledge as a backend developer with Node.js and, mainly, c# .NET.',
    imgUrl: images.about03
  },
  {
    title: 'Web Design',
    description: "I'm not a UX/UI designer, but I like to learn about design to improve as a Frontend Developer.",
    imgUrl: images.about04
  },
  {
    title: 'System Analyst',
    description: 'I am studying Systems Analyst at IES 21 by distance learning.',
    imgUrl: images.about05
  },
];


const About = () => {

  return (
    <>
      <h2 className="head-text">
        I Am
        <span> Always Looking</span>
        <br />
        For New
        <span> Challenges</span>
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