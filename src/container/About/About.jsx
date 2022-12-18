import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Desarrollo FrontEnd',
    description: 'Me encanta el desarrollo Frontend con React y crear espectaculares diseños web',
    imgUrl: images.about01
  },
  {
    title: 'Desarrollo Backend',
    description: 'Perfeccionando mis conocimientos en backend con C# .NET y Node JS',
    imgUrl: images.about03
  },
  {
    title: 'Diseño UX/UI',
    description: "Me gusta aprender sobre diseño UI/UX para mejorar mis capacidades como Frontend Developer",
    imgUrl: images.about04
  },
  {
    title: 'Analista de Sistemas',
    description: 'Soy estudiante de la carrera Analista de Sistemas en el Colegio Universitario IES 21, de Córdoba a distancia',
    imgUrl: images.about05
  },
];


const About = () => {

  return (
    <>
      <h2 className="head-text">
        Siempre
        <span> Buscando</span>
        <br />
        Nuevos
        <span> Retos</span>
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