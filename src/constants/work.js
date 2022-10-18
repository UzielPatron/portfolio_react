import fresh from '../assets/project1.png';
import movies from '../assets/project2.png';
import lyriks from '../assets/project3.png';
import calendar from '../assets/project4.png';

const work = [
  {
    name: 'Fresh E-Commerce',
    description: 'E-commerce completo, funcional y full responsive creado con React.Js, Strapi, Node.js y MongoDB',
    imgUrl: fresh,
    projectLink: 'https://fresh-e-commerce.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/fresh-e-commerce-reactjs',
    tags: [ 'React JS', 'All' ],
  },
  {
    name: 'Movies App',
    description: 'Un app web de películas y series con React y Sass, que implementa la API de TMDB',
    imgUrl: movies,
    projectLink: 'https://moviesapp-uzielpatron.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/react-movie',
    tags: [ 'React JS', 'All'  ],
  },
  {
    name: 'Lyriks Music Player',
    description: 'Reproductor de música tipo Spotify con React y Tailwind CSS',
    imgUrl: lyriks,
    projectLink: 'https://lyriks-app-uzielpatron.netlify.app/',
    codeLink: 'https://github.com/UzielPatron/lyriks-music-player',
    tags: [ 'All'  ],
  },
  {
    name: 'Calendario con MERN',
    description: 'Aplicación de calendario creada con React, node.js, express y mongoDB',
    imgUrl: calendar,
    projectLink: 'https://my-mern-calendar-back-end.herokuapp.com/',
    codeLink: 'https://github.com/UzielPatron',
    tags: [ 'All' ],
  },
]

export default work;