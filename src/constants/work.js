import fresh from '../assets/project1.png';
import movies from '../assets/project2.png';
import lyriks from '../assets/project3.png';
import calendar from '../assets/project4.png';

const work = [
  {
    name: 'Fresh E-Commerce',
    description: 'Completo, funcional y full responsive E-Commerce creado con React.Js, Node.js, Strapi y MongoDB.',
    imgUrl: fresh,
    projectLink: 'https://fresh-e-commerce.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/fresh-e-commerce-reactjs',
    tags: [ 'FullStack', 'Responsive Design', 'Todos' ],
  },
  {
    name: 'Movies App',
    description: 'Una web app de películas y series con React y Sass, implementando la API de TMDB.',
    imgUrl: movies,
    projectLink: 'https://moviesapp-uzielpatron.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/react-movie',
    tags: [ 'Public APIs', 'Responsive Design', 'Todos'  ],
  },
  {
    name: 'Lyriks Music Player',
    description: 'Reproductor de música tipo Spotify creado con React y Tailwind CSS',
    imgUrl: lyriks,
    projectLink: 'https://lyriks-app-uzielpatron.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/lyriks-music-player',
    tags: [ 'Public APIs', 'Responsive Design', 'Todos'  ],
  },
  {
    name: 'MERN Calendar',
    description: 'Aplicación de calendario construida con React, Node.js, Express y MongoDB',
    imgUrl: calendar,
    projectLink: 'https://my-mern-calendar-back-end.herokuapp.com/',
    codeLink: 'https://github.com/UzielPatron',
    tags: [ 'MERN', 'FullStack', 'Todos' ],
  },
]

export default work;